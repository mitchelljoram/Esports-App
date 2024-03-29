import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const TeamScreen = () => {
    const navigation = useNavigation();
    
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-sky-400">Team Screen</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
};