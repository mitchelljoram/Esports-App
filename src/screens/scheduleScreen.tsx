import React from "react";
import { View, Text, Button } from "react-native";
  
export const ScheduleScreen = ({ navigation } : any) => {

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-sky-400">Schedule Screen</Text>
            <Button
                title="Go to Match Screen"
                onPress={() => navigation.navigate("Match-Screen")}
            />
        </View>
    );
};