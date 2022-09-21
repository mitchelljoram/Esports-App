import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { PlayerTab } from './PlayerTab';
import useSWR from 'swr';

//url = 'https://api.pandascore.co/lol/teams?filter[id]={teamID}&sort=&page=1&per_page=1&token='
const token = 'qQGu1Fn_qXWWjkuLu56KH_vlI939ee2aXXBAnrdqGSaC2PFYwuc';
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const playerLineup = (players) => {
    let lineup = [5];
    players?.forEach((player) => {
        switch(player.role){
        case 'top':
            lineup[0] = player;
            break;
        case 'jun':
            lineup[1] = player;
            break;
        case 'mid':
            lineup[2] = player;
            break;
        case 'adc':
            lineup[3] = player;
            break;
        case 'sup':
            lineup[4] = player;
            break;
        }
    });
    return lineup;
};

const TeamPage = ({route, navigation}) => {
    const { teamID } = route.params;
    const { data, error } = useSWR(`https://api.pandascore.co/lol/teams?filter[id]=${teamID}&sort=&page=1&per_page=1&token=`+token, fetcher);

    if(data){
        console.log(data[0].id + ' - ' + data[0].name);
        const lineup = playerLineup(data[0].players);

        return (
        <View key={data[0].id} style={styles.container}>
            <Image source={{uri: data[0].image_url}} style={styles.teamImage}/>
            <Text style={styles.teamName}>{data[0].name}</Text>
            {lineup.map((player) => {
            //let { data, error } = useSWR("https://api.pandascore.co/lol/players/{player_id_or_slug}/stats?token="+this.token, this.fetcher);
            return (
            <PlayerTab key={player.id} player={player}/>
            )
            })} 
        </View>
        );
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
    teamImage: {
        justifyContent: 'center',
        width: 500,
        height: 166,
        resizeMode: 'cover',
    },
    teamName: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default TeamPage;