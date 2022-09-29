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

const TeamPage = ({ route }) => {
    const { teamID } = route.params;
    const { data, error } = useSWR(`https://api.pandascore.co/lol/teams?filter[id]=${teamID}&sort=&page=1&per_page=1&token=`+token, fetcher);

    if(data){
        const lineup = playerLineup(data[0].players);

        return (
        <View key={data[0].id}>
            <View style={styles.header}>
                <Image style={styles.teamImage} source={{uri: data[0].image_url}} />
                <Text style={styles.teamName}>{data[0].name}</Text>
            </View>
            <View>
                {lineup.map((player) => {
                //let { data, error } = useSWR("https://api.pandascore.co/lol/players/{player_id_or_slug}/stats?token="+this.token, this.fetcher);
                return (
                <PlayerTab key={player.id} player={player}/>
                )
            })}
            </View>
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
    header: {
        width: '100%',
        backgroundColor: '#000',
        flexDirection: 'row',
        borderTopColor: '#fff',
        height: 150,
        borderTopWidth: 1,
        paddingHorizontal: 20,
    },
    teamImage: {
        width: 100,
        resizeMode: 'contain',
    },
    teamName: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 60,
        marginLeft: 20,
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default TeamPage;