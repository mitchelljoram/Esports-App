import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight } from 'react-native';

const MatchTab = ({ match, navigation }) => {

    if(match.status === 'finished'){
        return(
        <SafeAreaView style={styles.content}>
            <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[0].opponent.id});}}>
                {match.winner_id === match.opponents[0].opponent.id ? 
                <Image source={{uri: match.opponents[0].opponent.image_url}} style={styles.teamImage}/>
                :
                <Image source={{uri: match.opponents[0].opponent.image_url}} style={styles.teamImageLost}/>
                }
            </TouchableHighlight>
            <Text style={styles.vsText}>{`${match.results[0].score} - ${match.results[1].score}`}</Text>
            <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[1].opponent.id});}}>
                {match.winner_id === match.opponents[1].opponent.id ? 
                <Image source={{uri: match.opponents[1].opponent.image_url}} style={styles.teamImage}/>
                :
                <Image source={{uri: match.opponents[1].opponent.image_url}} style={styles.teamImageLost}/>
                }
            </TouchableHighlight>
        </SafeAreaView>
        );
    }

    return(
    <SafeAreaView style={styles.content}>
        {match.games[0].begin_at != null &&  match.games[match.games.length - 1].end_at == null?
        <Text style={styles.liveText}>LIVE</Text>
        :
        null
        }
        {match.opponents[0] ?
        <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[0].opponent.id});}}>
            <Image source={{uri: match.opponents[0].opponent.image_url}} style={styles.teamImage}/>
        </TouchableHighlight>
        :
        <Text>TBD</Text>
        }
        <Text style={styles.vsText}>VS</Text>
        {match.opponents[1] ?
        <TouchableHighlight onPress={() => {navigation.navigate('team', {'teamID': match.opponents[1].opponent.id});}}>
            <Image source={{uri: match.opponents[1].opponent.image_url}} style={styles.teamImage}/>
        </TouchableHighlight>
        :
        <Text>TBD</Text>
        }
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderBottomColor: '#a5b0b5',
        borderBottomWidth: 1,
        height: 85,
        padding: 10,
    },
    liveText: {
        position: 'absolute',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        top: 10,
    },
    vsText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        padding: 20,
    },
    teamImage: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
    },
    teamImageLost: {
        width: 60,
        height: 60,
        opacity: 0.3,
    },
});

export default MatchTab;