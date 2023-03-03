import React from "react";
import { StandingsScreen } from "../screens/standingsScreen";
import { useNavigation } from '@react-navigation/native';

export const StandingsTab = ( ) => {
    const navigation = useNavigation();

    return (
      <StandingsScreen navigation={navigation}/>
    );
};