import React from "react";
import { SafeAreaView, View, Text, Button, ScrollView } from "react-native";
import { MatchCard } from "../components/schedule/matchCard";

import { useNavigation } from '@react-navigation/native';

const localizeDate = (date: string): Date => {
    let localizedDate = new Date(new Date(date).getTime() - (9 * 60 * 60 * 1000));
    return localizedDate;
}
const formatDate = (date: Date): string => {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    let formattedDate = yyyy + '-' + mm + '-' + dd; 
    return formattedDate;
}
const displayDateWMD = (date: string) => {
    let dateSplit = date.split('-');
    let displayWMD = new Date(parseInt(dateSplit[0]),parseInt(dateSplit[1])-1,parseInt(dateSplit[2]),).toLocaleDateString('en-us');
    return displayWMD.substring(0,displayWMD.length-3);
}


export const ScheduleScreen = ({ schedule }: any) => {
    const navigation = useNavigation();

    let weekDate = "";
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            {/*
            <Text className="text-sky-400">Schedule Screen</Text>
            <Button
                title="Go to Match Screen"
                onPress={() => navigation.navigate("Match-Screen")}
            />
            */}
            <ScrollView>
                {
                    schedule ?
                    schedule.map((match: any) => {
                        let matchDate = formatDate(localizeDate(match.scheduled_at));
                        if(matchDate !== weekDate)
                            return (<MatchCard key={match.id} match={match} />);
                        
                        weekDate = matchDate;
                        console.log(weekDate);
                        return (
                            <View key={match.id}>
                                <Text>{displayDateWMD(weekDate)}</Text>
                                <MatchCard match={match} />
                            </View>
                        );
                    })
                    : 
                    <Text>No matches scheduled</Text>
                }
            </ScrollView>
        </SafeAreaView>
    );
};