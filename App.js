import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage'
import TeamPage from './components/TeamPage';

const Stack = createNativeStackNavigator();

// const leagues = [{"id":293,"name":"LCK"},{"id":294,"name":"LPL"},{"id":302,"name":"CBLOL"},{"id":1003,"name":"TCL"},{"id":2092,"name":"LJL"},{"id":4141,"name":"VCS"},{"id":4197,"name":"LEC"},{"id":4198,"name":"LCS"},{"id":4199,"name":"LLA"},{"id":4288,"name":"PCS"},{"id":4539,"name":"LCO"}]
// const teams = [{id:387,name:"Team SoloMid"},{id:389,name:"Counter Logic Gaming"},{id:390,name:"Team Liquid"}];

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component={HomePage}/>
      <Stack.Screen name='team' component={TeamPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};