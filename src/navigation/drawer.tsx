import React from "react";
import { View, Text, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./stack";
import leagues from "../components/common/leagues"

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{drawerStyle: {backgroundColor: "#313639",width: 250,}, swipeEnabled: false}}>
            {leagues.map((league) => {
                return (
                    // TODO: send api ids to StackNavigator
                    <Drawer.Screen key={league.id} name={league.name} component={StackNavigator} options={{
                        drawerIcon: () => {
                            return(
                                <View className="h-20 justify-center">
                                    <Image className="h-12 w-12" source={{uri: league.image}} />
                                </View>
                            );
                        }, 
                        drawerLabel: () => {
                            return(
                                <View className="justify-center">
                                    <Text className="text-white text-2xl">{league.name}</Text>
                                    <Text className="text-white text-sm">{league.region}</Text>
                                </View>
                            );
                        },
                    }}/>
                )
            })}
        </Drawer.Navigator>
    )
};