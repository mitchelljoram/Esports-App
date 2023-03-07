import React, { useState } from "react";
import { SafeAreaView, View, ScrollView , Text, Pressable } from "react-native";
import { MatchCard } from "../components/schedule/matchCard";

import { useNavigation } from '@react-navigation/native';

const getPrevWeek = (date: Date): Date => {
    let prevWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate()-7);
    return prevWeek;
}
const getWeek = (date: Date): any => {
    let monday = null;
    let sunday = null;
    if(date.getDay() === 0){
        monday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 6);
        sunday = date;
    }
    else{
        monday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1);
        sunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 7);
    }
    return { 
        week_start: monday,
        week_end: sunday
    };
}
const getNextWeek = (date: Date): Date => {
    let nextWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate()+7);
    return nextWeek;
}

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

const displayDay = (date: string) => {
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let dateSplit = date.split('-');
    let dateDate = new Date(parseInt(dateSplit[0]),parseInt(dateSplit[1])-1,parseInt(dateSplit[2]),);

    let day = weekdays[dateDate.getDay()];
    let month = months[dateDate.getMonth()];
    let dateString = dateDate.toLocaleDateString('en-us');

    return `${day} - ${month} ${dateString.split('/')[1]}`;
}
const displayWeek = (date: Date): string => {
    return date.toLocaleDateString('en-us');
}


export const ScheduleScreen = ({ schedule }: any) => {
    const navigation = useNavigation();

    const [date, dateSet] = useState(new Date());
    let { week_start, week_end } = getWeek(date);

    let weekDate = "";
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <View className="flex flex-row items-center py-4">
                <Pressable className="pr-3" onPress={() => {dateSet(getPrevWeek(date))}}>
                    <Text className="border px-2">{'<'}</Text>
                </Pressable>
                <Text>{`${displayWeek(week_start)}   —   ${displayWeek(week_end)}`}</Text>
                <Pressable className="pl-3" onPress={() => {dateSet(getNextWeek(date))}}>
                    <Text className="border px-2">{'>'}</Text>
                </Pressable>
            </View>
            <ScrollView>
                {
                    schedule.length > 0 ?
                    schedule.map( ( match: any, index: number ) => {
                        let matchDate = formatDate(localizeDate(match.scheduled_at));
                        if( matchDate === weekDate )
                            return (
                                <View className="mb-[1px]" key={match.id}>
                                    <MatchCard key={match.id} match={match} />
                                </View>
                            );
                        
                        weekDate = matchDate;
                        if ( index === 0 ) 
                            return (
                                <View className="mb-[1px]" key={match.id}>
                                    <View className="bg-[#313639] mb-[1px]">
                                        <Text className="text-white text-bold">{displayDay(weekDate)}</Text>
                                    </View>
                                    <MatchCard match={match} />
                                </View>
                            )
                        return (
                            <View className="mt-[2px] mb-[1px]" key={match.id}>
                                <View className="bg-[#313639] mb-[1px]">
                                    <Text className="text-white text-bold">{displayDay(weekDate)}</Text>
                                </View>
                                <MatchCard match={match} />
                            </View>
                        );
                    })
                    : 
                    <Text>No matches scheduled this week</Text>
                }
            </ScrollView>
        </SafeAreaView>
    );
};