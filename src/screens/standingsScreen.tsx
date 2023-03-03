import React from "react";
import { View, Text, Button } from "react-native";
  
export const StandingsScreen = ( {navigation} : any ) => {

    return (
        <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-sky-400">Standings Screen</Text>
        <Button
          title="Go to Team Screen"
          onPress={() => navigation.navigate("Team-Screen")}
        />
      </View>
    );
};