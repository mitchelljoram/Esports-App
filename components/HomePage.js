import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LeagueMenu from './LeagueMenu';
import SchedulePage from './SchedulePage';
//import { Swiper } from 'react-native-swiper';

const HomePage = ({navigation}) => {
    const [league_id, setLeagueId] = useState(297);

    return(
    <View>
        <LeagueMenu league_id={league_id} setLeagueId={setLeagueId}/>
        <SchedulePage league_id={league_id} navigation={navigation}/>
    </View>
    );
};

const styles = StyleSheet.create({
});

export default HomePage;