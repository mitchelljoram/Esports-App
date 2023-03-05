import React from "react";
import { SafeAreaView, Text, Button, ScrollView } from "react-native";
import { RankCard } from "../components/standings/rankCard";

import { useNavigation } from '@react-navigation/native';
  
export const StandingsScreen = ({ standings }: any) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-center bg-white">
      {/*
        <Text className="text-sky-400">Standings Screen</Text>
        <Button
          title="Go to Team Screen"
          onPress={() => navigation.navigate("Team-Screen")}
        />
      */}
      <ScrollView>
        {standings.map((rank: any) => {
          return rank.teams.map((team: any) => ( <RankCard key={team.id} ordinal={rank.ordinal} team={team} /> ))
        })}
      </ScrollView>
    </SafeAreaView>
  );
};