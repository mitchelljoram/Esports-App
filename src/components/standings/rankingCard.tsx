import React from "react";
import { View, Text, Image } from "react-native";

export const RankingCard = ({ team }: any) => {
    return (
        <View className="w-full flex flex-row items-center bg-[#313639] py-4 px-10 border-b-2 border-white">
            <View className="w-7 items-center justify-left mr-5">
                <Text className="text-2xl text-white font-bold">{team.ordinal}</Text>
            </View>
            <View className="flex flex-row items-center justify-left">
                <Image
                    source={{ uri: team.teams[0].image }}
                    className="w-10 h-10"
                />
                <Text className="text-white font-bold ml-4">{team.teams[0].name}</Text>
            </View>
            <View className="items-center justify-right ml-auto">
                <Text className="text-white font-bold">{team.teams[0].record.wins} - {team.teams[0].record.losses}</Text>
            </View>
        </View>
    );
};