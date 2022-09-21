import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

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
        <View style={styles.collapsing}>
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
        </View>
        );
    }
};

const styles = StyleSheet.create({
    collapsing:{
        borderBottomWidth: 1,
        borderBottomColor: '#a5b0b5',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    playerImage: {
        justifyContent: 'left',
        width: 50,
        height: 50,
    },
    playerName: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 24,
        transform: 'translate(50px, 20%)',
    },
});