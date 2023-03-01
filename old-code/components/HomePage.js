import React, { useState } from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import LeagueMenu from './LeagueMenu';
import SchedulePage from './SchedulePage';
//import { Swiper } from 'react-native-swiper';

const HomePage = ({navigation}) => {
    const [league_id, setLeagueId] = useState(297);

    return(
    <SafeAreaView>
        <LeagueMenu league_id={league_id} setLeagueId={setLeagueId}/>
        <SchedulePage league_id={league_id} navigation={navigation}/>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});

export default HomePage;