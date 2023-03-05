import React from "react";
import { View, Text, Image } from "react-native";

export const RankCard = ({ ordinal, team }: any) => {

    return (
        // TODO: Make this clickable to navigate to team page
        // TODO: Use team.slug to send to pandascore for team page
        <View className="flex flex-row items-center bg-[#313639] py-5 px-10 border-b-2 border-white">
            <Text className="w-10 text-3xl text-white font-bold text-left mr-5">{ordinal}</Text>
            <View className="mr-10">
                <Image source={{ uri: team.image }} className="w-12 h-12"/>
            </View>
            <Text className="items-center justify-left">
                <Text className="text-base text-white font-bold ml-2">{`${team.name}\n`}</Text>
                <Text className="text-sm text-white font-bold">{team.record.wins} - {team.record.losses}</Text>
            </Text>
        </View>
    );
};