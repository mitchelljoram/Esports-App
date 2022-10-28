import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, ImageBackground } from 'react-native';
import { PlayerTab } from './PlayerTab';
// import PlayerTab from './PlayerTab';
import useSWR from 'swr';

//url = 'https://api.pandascore.co/lol/teams?filter[id]={teamID}&sort=&page=1&per_page=1&token='
const token = 'qQGu1Fn_qXWWjkuLu56KH_vlI939ee2aXXBAnrdqGSaC2PFYwuc';
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const playerLineup = (players) => {
    let lineup = new Array(players.length).fill(null);
    players.forEach((player) => {
        switch(player.role){
        case 'top':
            if(lineup[0]!=null){
                for(let i=0;i<players.length;++i){
                    if(lineup[i]==null){
                        lineup[i] = player;
                        break;
                    }
                }
                break;
            }
            lineup[0] = player;
            break;
        case 'jun':
            if(lineup[1]!=null){
                for(let i=0;i<players.length;++i){
                    if(lineup[i]==null){
                        lineup[i] = player;
                        break;
                    }
                }
                break;
            }
            lineup[1] = player;
            break;
        case 'mid':
            if(lineup[2]!=null){
                for(let i=0;i<players.length;++i){
                    if(lineup[i]==null){
                        lineup[i] = player;
                        break;
                    }
                }
                break;
            }
            lineup[2] = player;
            break;
        case 'adc':
            if(lineup[3]!=null){
                for(let i=0;i<players.length;++i){
                    if(lineup[i]==null){
                        lineup[i] = player;
                        break;
                    }
                }
                break;
            }
            lineup[3] = player;
            break;
        case 'sup':
            if(lineup[4]!=null){
                for(let i=0;i<players.length;++i){
                    if(lineup[i]==null){
                        lineup[i] = player;
                        break;
                    }
                }
                break;
            }
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
        const lineup = playerLineup(data[0].players).filter(player => player != null);

        return (
        <View key={data[0].id}>
            <View style={styles.header}>
                <View style={styles.shadow}/>
                <Image style={styles.teamImage} source={{uri: data[0].image_url}}/>
                <Text style={styles.teamName}>{data[0].name}</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                {lineup.map((player) => {
                    return (
                    <PlayerTab key={player.id} player={player}/>
                    )
                })}
            </ScrollView>
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
        backgroundColor: '#272727',
        flexDirection: 'row',
        borderTopColor: '#fff',
        height: 150,
        borderTopWidth: 1,
        paddingHorizontal: 20,
    },
    scrollView: {
        height: 560,
    },
    teamImage: {
        resizeMode: 'contain',
        width: 100,
        top: 0,
        left: -102.5,
    },
    shadow: {
        backgroundColor: '#fff',
        position: 'relative',
        width: 105,
        height: 105,
        borderRadius: 105 / 2,
        top: 22.5,
    },
    teamName: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 60,
        left: -75,
    },
});

export default TeamPage;