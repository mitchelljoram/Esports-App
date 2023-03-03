import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./navigation/drawer";

const AppIndex = () => {
  return (
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
  );
};

export default AppIndex;