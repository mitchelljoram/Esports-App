import React from "react";
import { View, Text, Image } from "react-native";

export const MatchCard = ({ match }: any) => {

    if ( match.status === "finished" ) {
        // TODO: Make this clickable to navigate to match page
        // TODO: Use match.id to send to pandascore for match page
        return(
            <View className="w-full flex flex-row items-center bg-[#313639] py-5 px-10 border-b-2 border-white">
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
        );
    }

    return (
        // Not clickable 
        <View className="w-full bg-[#313639] py-5 px-10 border-b-2 border-white">
            {
                match.games[0].begin_at != null &&  match.games[match.games.length - 1].end_at == null ?
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
        </View>
    );
};