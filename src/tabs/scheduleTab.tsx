import React from "react";
import { ScheduleScreen } from "../screens/scheduleScreen";
import { useNavigation } from '@react-navigation/native';

export const ScheduleTab = () => {
    const navigation = useNavigation();

    return (
      <ScheduleScreen navigation={navigation}/>
    );
};