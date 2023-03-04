import React from "react";
import { View, Text, Image } from "react-native";

export const RankingCard = ({ team }: any) => {
    return (
        <View className="w-full flex flex-row items-center justify-between bg-[#313639] p-4 mb-4">
            <Text className="text-2xl font-bold">{team.ordinal}</Text>
            <View className="flex flex-row items-center">
                <Image
                    source={{ uri: team.teams[0].image }}
                    className="w-10 h-10 rounded-full"
                />
                <Text className="text-white font-bold ml-4">{team.teams[0].name}</Text>
            </View>
            <Text className="text-white font-bold">{team.teams[0].record.wins} - {team.teams[0].record.losses}</Text>
        </View>
    );
};