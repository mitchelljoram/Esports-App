import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

//let { data, error } = useSWR("https://api.pandascore.co/lol/players/{player_id_or_slug}/stats?token="+this.token, this.fetcher);

export class PlayerTab extends Component {
    state = {
        collapsed: true,
    };

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {

        const { player } = this.props;

        return (
        <SafeAreaView style={styles.collapsing}>
            <TouchableOpacity onPress={this.toggleExpanded}>
                <View style={styles.content}>
                    <Image source={{uri: player.image_url}} style={styles.playerImage}/>
                    <Text style={styles.playerName}>{player.name} - {player.role}</Text>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsed}>
                <View style={styles.content}>
                    <Text>Stats go here</Text>
                </View>
            </Collapsible>
        </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    collapsing:{
        borderBottomColor: '#a5b0b5',
        borderBottomWidth: 1,
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 109,
        padding: 20,
    },
    playerImage: {
        width: 80,
        height: 80,
        marginRight: 50,
    },
    playerName: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 24,
    },
});

/*
import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

const PlayerTab = ({ player }) => {
    return (
    <SafeAreaView style={styles.content}>
        <Image source={{uri: player.image_url}} style={styles.playerImage}/>
        <Text style={styles.playerName}>{player.name} - {player.role}</Text>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomColor: '#a5b0b5',
        borderBottomWidth: 1,
        height: 111,
        padding: 20,
    },
    playerImage: {
        width: 50,
        height: 50,
        marginRight: 50,
    },
    playerName: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 24,
    },
});
*/