import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage'
import TeamPage from './components/TeamPage';

const Stack = createNativeStackNavigator();

// const teams = [{id:387,name:"Team SoloMid"},{id:389,name:"Counter Logic Gaming"},{id:390,name:"Team Liquid"}];

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component={HomePage} options={{title:'Schedule', headerStyle:{backgroundColor:'#272727'}, headerTintColor: '#fff', headerTitleStyle:{fontWeight:'bold'}}}/>
      <Stack.Screen name='team' component={TeamPage} options={{title:'', headerStyle:{backgroundColor:'#272727'}, headerTintColor: '#fff'}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};