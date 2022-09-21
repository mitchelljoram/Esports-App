import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import useSWR from 'swr';

const PAST = 0;
const LIVE = 1;
const UPCOMING = 2;

const pastUrl = (leagueID) => {
    return `https://api.pandascore.co/lol/matches/past?filter[league_id]=${leagueID}&sort=&page=1&per_page=10&token=`;
}
const liveUrl = (date, leagueID) => {
    return `https://api.pandascore.co/lol/matches/running?filter[begin_at]=${date}&filter[league_id]=${leagueID}&sort=&page=1&per_page=10&token=`;
}
const upcomingUrl = (date, leagueID) => {
    return `https://api.pandascore.co/lol/matches/upcoming?filter[begin_at]=${date}&filter[league_id]=${leagueID}&sort=&page=1&per_page=10&token=`;
}
const token = 'qQGu1Fn_qXWWjkuLu56KH_vlI939ee2aXXBAnrdqGSaC2PFYwuc';
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const getToday = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

const GameSchedule = (props) => {
    const { id, navigation } = props;
    const today = getToday();
    
    if(id === PAST){
        const { data, error } = useSWR(pastUrl(4198)+token, fetcher);
        if(data && data.length){
            return (
            <View style={styles.container}>
                {data.reverse().map((match) => {
                    return (
                    <View style={styles.container} key={match.id}>
                        <Text style={styles.matchText}>{match.name}</Text>
                        <View style={styles.content}>
                            <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[0].opponent.id});}}>
                                {match.winner_id === match.opponents[0].opponent.id ? 
                                <Image source={{uri: match.opponents[0].opponent.image_url}} style={styles.teamImage}/>
                                :
                                <Image source={{uri: match.opponents[0].opponent.image_url}} style={styles.teamImageLost}/>
                                }
                            </TouchableHighlight>
                            <Text style={styles.textVS}>{match.results[0].score} - {match.results[1].score}</Text>
                            <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[1].opponent.id});}}>
                                {match.winner_id === match.opponents[1].opponent.id ? 
                                <Image source={{uri: match.opponents[1].opponent.image_url}} style={styles.teamImage}/>
                                :
                                <Image source={{uri: match.opponents[1].opponent.image_url}} style={styles.teamImageLost}/>
                                }
                            </TouchableHighlight>
                        </View>
                    </View>
                    )
                })}
            </View>
            )
        }
        return(
        <View>
            <Text>Loading...</Text>
        </View>
        );
    }

    else if(id === LIVE){
        const { data, error } = useSWR(liveUrl(today,4198)+token, fetcher);
        if(data && data.length){
            return (
            <View style={styles.container}>
                <Text style={styles.liveText}>LIVE</Text>
                {data.map((match) => {
                    return (
                    <View style={styles.container} key={match.id}>
                        <Text style={styles.matchText}>{match.name}</Text>
                        <View style={styles.content}>
                            <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[0].opponent.id});}}>
                                <Image source={{uri: match.opponents[0].opponent.image_url}} style={styles.teamImage}/>
                            </TouchableHighlight>
                            <Text style={styles.textVS}>VS.</Text>
                            <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[1].opponent.id});}}>
                                <Image source={{uri: match.opponents[1].opponent.image_url}} style={styles.teamImage}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                    )
                })}
            </View>
            )
        }
        return(
        <View>
            <Text>Loading...</Text>
        </View>
        );
    }
    
    else{
        const { data, error } = useSWR(upcomingUrl(today,4198)+token, fetcher);
        if(data && data.length){
            return (
            <View style={styles.container}>
                <Text style={styles.matchText}>UPCOMING</Text>
                {data.map((match) => {
                    return (
                    <View style={styles.container} key={match.id}>
                        <Text style={styles.matchText}>{match.name}</Text>
                        <View style={styles.content}>
                            {match.opponents[0] ? 
                            <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[0].opponent.id});}}>
                                <Image source={{uri: match.opponents[0].opponent.image_url}} style={styles.teamImage}/>
                            </TouchableHighlight>
                            : <Text>TBD</Text>}
                            <Text style={styles.textVS}>VS.</Text>
                            {match.opponents[1] ? 
                            <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[1].opponent.id});}}>
                                <Image source={{uri: match.opponents[1].opponent.image_url}} style={styles.teamImage}/>
                            </TouchableHighlight>
                            : <Text>TBD</Text>}
                        </View>
                    </View>
                    )
                })}
            </View>
            )
        }
        return(null);
    }

    return(
    <View>
        <Text>Loading...</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    matchText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    liveText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#a5b0b5',
        justifyContent: 'center',
    },
    textVS: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    teamImage: {
        width: 50,
        height: 50,
    },
    teamImageLost: {
        width: 50,
        height: 50,
        opacity: 0.3,
    },
});

export default GameSchedule;