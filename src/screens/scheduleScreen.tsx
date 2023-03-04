import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
  
export const ScheduleScreen = ({ schedule }: any) => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-sky-400">Schedule Screen</Text>
            <Text>{schedule[0].match.teams[0].name}</Text>
            <Button
                title="Go to Match Screen"
                onPress={() => navigation.navigate("Match-Screen")}
            />
        </View>
    );
};