import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

const leagues = [
    {id: 4198, name: 'LCS', image: require('./league-icons/LCS.png')},
    {id: 4197, name: 'LEC', image: require('./league-icons/LEC.png')},
    {id: 293, name: 'LCK', image: require('./league-icons/LCK.png')},
    {id: 294, name: 'LPL', image: require('./league-icons/LPL.png')},
    {id: 302, name: 'CBLOL', image: require('./league-icons/CBLOL.png')},
    {id: 4539, name: 'LCO', image: require('./league-icons/LCO.png')},
    {id: 2092, name: 'LJL', image: require('./league-icons/LJL.png')},
    {id: 4199, name: 'LLA', image: require('./league-icons/LLA.png')},
    {id: 4288, name: 'PCS', image: require('./league-icons/PCS.png')},
    {id: 1003, name: 'TCL', image: require('./league-icons/TCL.png')},
    {id: 4141, name: 'VCS', image: require('./league-icons/VCS.png')},
    {id: 297, name:'Worlds', image: require('./league-icons/Worlds.png')}
]

const LeagueMenu = ({ league_id ,setLeagueId }) => {
    return(
    <View>
        <ScrollView style={styles.leagueMenu} horizontal={true}>
            {leagues.map((league) => {
                if(league.id === league_id){
                    return(
                    <TouchableOpacity key={league.id} style={styles.pickedLeagueTab}>
                        <Image source={league.image} style={styles.pickedLeagueIcon}/>
                        <Text style={styles.pickedLeagueName}>{league.name}</Text>
                    </TouchableOpacity>
                    );
                }
                return(
                <TouchableOpacity key={league.id} style={styles.leagueTab} onPress={() => {setLeagueId(league.id)}}>
                    <Image source={league.image} style={styles.leagueIcon}/>
                    <Text style={styles.leagueName}>{league.name}</Text>
                </TouchableOpacity>
                );
            })}
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    leagueMenu: {
        width: '100%',
        backgroundColor: '#000',
        borderTopColor: '#fff',
        borderBottomColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 25,
    },
    leagueTab: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        marginHorizontal: 12,
        marginVertical: 0,
    },
    leagueIcon: {
        tintColor: '#fff',
        hieght: 'auto',
        resizeMode: 'contain',
        width: 30,
        marginHorizontal: 10,
        marginVertical: 0,
    },
    leagueName:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
        marginVertical: 0,
    },
    pickedLeagueTab: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        marginHorizontal: 12,
        marginVertical: 0,
    },
    pickedLeagueIcon: {
        tintColor: '#000',
        hieght: 'auto',
        resizeMode: 'contain',
        width: 30,
        marginHorizontal: 10,
        marginVertical: 0,
    },
    pickedLeagueName:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
        marginVertical: 0,
    },
});

export default LeagueMenu;