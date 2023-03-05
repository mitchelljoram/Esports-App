import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./tabs";
import { MatchScreen } from "../screens/matchScreen";
import { TeamScreen } from "../screens/teamScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        // TODO: send api ids to TabNavigator
        <Stack.Navigator screenOptions={ {headerShown: false} }>
            <Stack.Screen name="Home-Screen" component={TabNavigator} />
            <Stack.Screen name="Match-Screen" component={MatchScreen} options={{}}/>
            <Stack.Screen name="Team-Screen" component={TeamScreen} options={{}}/>
        </Stack.Navigator>
    )
};