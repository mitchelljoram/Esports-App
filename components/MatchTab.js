import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const MatchTab = (props) => {
    const { match, navigation } = props;

    if(match.status === 'finished'){
        return(
        <View>
            <View style={styles.content}>
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
            </View>
        </View>
        );
    }

    return(
    <View>
        <View style={styles.content}>
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
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#a5b0b5',
        justifyContent: 'center',
    },
    liveText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
    },
    vsText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    teamImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    teamImageLost: {
        width: 60,
        height: 60,
        opacity: 0.3,
    },
});

export default MatchTab;