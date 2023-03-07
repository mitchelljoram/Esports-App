import React from "react";
import { View, Text, Image } from "react-native";

export const MatchCard = ({ match }: any) => {
    const matchName = match.name.split(" vs ");

    if ( match.status === "finished" ) {
        // TODO: Make this clickable to navigate to match page
        // TODO: Use match.id to send to pandascore for match page
        return(
            <View className="w-full bg-[#313639] py-2 px-10">
                <View className="w-full flex flex-row items-center">
                    <View className="mr-auto pl-10">
                        {
                            match.winner_id === match.opponents[0].opponent.id ? 
                            <Image source={{uri: match.opponents[0].opponent.image_url}} className="w-12 h-12"/>
                            :
                            <Image source={{uri: match.opponents[0].opponent.image_url}} className="w-12 h-12"/>
                        }
                    </View>
                    <Text className="text-sm text-white text-bold">{`${match.results[0].score} - ${match.results[1].score}`}</Text>
                    <View className="ml-auto pr-10">
                        {
                            match.winner_id === match.opponents[1].opponent.id ? 
                            <Image source={{uri: match.opponents[1].opponent.image_url}} className="w-12 h-12"/>
                            :
                            <Image source={{uri: match.opponents[1].opponent.image_url}} className="w-12 h-12"/>
                        }
                    </View>
                </View>
                <View className="flex flex-row text-sm justify-between px-12">
                    <Text className="text-white text-bold">{matchName[0]}</Text>
                    <Text className="text-white text-bold">{matchName[1]}</Text>
                </View>
            </View>
        );
    }

    return (
        // Not clickable 
        <View className="w-full bg-[#313639] py-2 px-10">
            {
                match.begin_at != null &&  match.end_at == null ?
                <View className="absolute top-2 left-5">
                    <Text className="text-red-500 text-bold">⦿ LIVE</Text>
                </View>
                :
                null
            }
            <View className="w-full flex flex-row items-center">
                <View className="mr-auto pl-10">
                    {
                        match.opponents[0] ?
                        <Image source={{uri: match.opponents[0].opponent.image_url}} className="w-12 h-12"/>
                        :
                        <Text>TBD</Text>
                    }
                </View>
                <Text className="text-sm text-white text-bold">VS</Text>
                <View className="ml-auto pr-10">
                    {
                        match.opponents[1] ?
                        <Image source={{uri: match.opponents[1].opponent.image_url}} className="w-12 h-12"/>
                        :
                        <Text>TBD</Text>
                    }
                </View>
            </View>
            <View className="flex flex-row text-sm justify-between px-12">
                <Text className="text-white text-bold">{matchName[0]}</Text>
                <Text className="text-white text-bold">{matchName[1]}</Text>
            </View>
        </View>
    );
};