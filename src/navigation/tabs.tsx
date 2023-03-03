import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScheduleTab } from "../tabs/scheduleTab";
import { StandingsTab } from "../tabs/standingsTab";

const Tab = createMaterialTopTabNavigator();

export const TabNavigator = ( { navigation }  : any ) => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Schedule-Tab" component={ScheduleTab} />
        <Tab.Screen name="Standings-Tab" component={StandingsTab} />
      </Tab.Navigator>
    );
};