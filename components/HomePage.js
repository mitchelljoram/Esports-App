import React from 'react';
import { View, Text } from 'react-native';
//import { Swiper } from 'react-native-swiper';
import GameSchedule from './GameSchedule';

const HomePage = ({navigation}) => {
    return(
    <View>
        <GameSchedule id={0} navigation={navigation}/>
        <GameSchedule id={1} navigation={navigation}/>
        <GameSchedule id={2} navigation={navigation}/>
    </View>
    );
};

export default HomePage;