import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

function LCS( { navigation }  : any ) {
  return (
    <Stack.Navigator screenOptions={ {headerShown: false} }>
      <Stack.Screen name="Home Screen" component={MyTabs} />
      <Stack.Screen name="Team Screen" component={TeamScreen} options={{}}/>
      <Stack.Screen name="Match Screen" component={MatchScreen} options={{}}/>
    </Stack.Navigator>
  )
}

function LEC( { navigation }  : any ) {
  return (
    <Stack.Navigator screenOptions={ {headerShown: false} }>
      <Stack.Screen name="Home Screen" component={MyTabs} />
      <Stack.Screen name="Team Screen" component={TeamScreen} options={{}}/>
      <Stack.Screen name="Match Screen" component={MatchScreen} options={{}}/>
    </Stack.Navigator>
  )
}

function MyTabs( { navigation }  : any ) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Schedule Tab" component={ScheduleTab} />
      <Tab.Screen name="Standings Tab" component={StandingsTab} />
    </Tab.Navigator>
  );
}

function ScheduleTab( { navigation }  : any ) {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-sky-400">Schedule</Text>
      <Button
        title="Go to Team Screen"
        onPress={() => navigation.navigate('Team Screen')}
      />
      <Button
        title="Go to Match Screen"
        onPress={() => navigation.navigate('Match Screen')}
      />
    </View>
  );
}

function StandingsTab( { navigation }  : any ) {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-sky-400">Standings</Text>
      <Button
        title="Go to Team Screen"
        onPress={() => navigation.navigate('Team Screen')}
      />
    </View>
  );
}

function TeamScreen( { navigation } : any ) {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-sky-400">Team Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

function MatchScreen( { navigation } : any ) {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-sky-400">Match Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{swipeEnabled: false}}>
        <Drawer.Screen name="LCS" component={LCS} />
        <Drawer.Screen name="LEC" component={LEC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}