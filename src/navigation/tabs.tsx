import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScheduleTab } from "../tabs/scheduleTab";
import { StandingsTab } from "../tabs/standingsTab";

const Tab = createMaterialTopTabNavigator();

export const TabNavigator = ( { navigation }  : any ) => {
    return (
      // TODO: send pandascore api id to ScheduleTab and rapidapi id to StandingsTab
      <Tab.Navigator>
        <Tab.Screen name="Schedule-Tab" component={ScheduleTab} />
        <Tab.Screen name="Standings-Tab" component={StandingsTab} />
      </Tab.Navigator>
    );
};