import React, { useState } from 'react';
import { StyleSheet, View, Text , Button, ScrollView, Pressable } from 'react-native';
import useSWR from 'swr';
import MatchTab from './MatchTab';

const token = 'qQGu1Fn_qXWWjkuLu56KH_vlI939ee2aXXBAnrdqGSaC2PFYwuc';
//const token = 'PCiqJmZP7-jlAo9ShZOakcgotiVIgEYAdrc4c26e_iqGQOTorlA';
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const getPrevWeek = (date) => {
    let prevWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate()-7);
    return prevWeek;
}
const getWeek = (date) => {
    let monday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1); // First day is the day of the month - the day of the week
    let sunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 7); // last day is the first day + 6

    return { 
    week_start: monday,
    week_end: sunday
    };
}
const getNextWeek = (date) => {
    let nextWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate()+7);
    return nextWeek;
}
const formatDate = (date) => {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();

    let formattedDate = yyyy + '-' + mm + '-' + dd;
    return formattedDate;
}
const displayDateMDY = (date) => {
    return date.toLocaleDateString('en-us');
}
const displayDateWMD = (date) => {
    let dateSplit = date.split('-');
    let displayWMD = new Date(parseInt(dateSplit[0]),parseInt(dateSplit[1])-1,parseInt(dateSplit[2]),).toLocaleDateString('en-us');
    return displayWMD.substring(0,displayWMD.length-3);
}

const url = (league_id, start_date, end_date) => {
    return `https://api.pandascore.co/lol/matches?filter[league_id]=${league_id}&sort=begin_at&range[begin_at]=${formatDate(start_date)}%2C${formatDate(end_date)}&page=1&per_page=50&token=${token}`;
}
/*
const pastUrl = (league_id) => {
    return `https://api.pandascore.co/lol/matches/past?filter[league_id]=${league_id}&sort=&page=1&per_page=10&token=`;
}
const liveUrl = (date, league_id) => {
    return `https://api.pandascore.co/lol/matches/running?filter[begin_at]=${date}&filter[league_id]=${league_id}&sort=&page=1&per_page=10&token=`;
}
const upcomingUrl = (date, league_id) => {
    return `https://api.pandascore.co/lol/matches/upcoming?filter[begin_at]=${date}&filter[league_id]=${league_id}&sort=&page=1&per_page=10&token=`;
}
*/

const SchedulePage = ({ league_id, navigation }) => {
    const [date, dateSet] = useState(new Date());
    let { week_start, week_end } = getWeek(date);

    const { data, error } = useSWR(url(league_id, week_start, week_end), fetcher);

    if(error){
        return(
        <View>
            <Text>LoL Error</Text>
        </View>
        );
    }
    else if(data){
        let currentDate = null;
        return(
            <View>
                
                <View style={styles.header}>
                    <Pressable style={styles.arrowButton} onPress={() => {dateSet(getPrevWeek(date))}}>
                        <Text style={styles.arrowText}>{'<'}</Text>
                    </Pressable>
                    <Text style={styles.mdyText}>{`${displayDateMDY(week_start)}    -    ${displayDateMDY(week_end)}`}</Text>
                    <Pressable style={styles.arrowButton} onPress={() => {dateSet(getNextWeek(date))}}>
                        <Text style={styles.arrowText}>{'>'}</Text>
                    </Pressable>
                </View>
                <ScrollView style={styles.scrollView}>
                    {data.length ? 
                    data.map((match) => {
                        let matchDate = match.scheduled_at.split('T')[0];
                        if(matchDate === currentDate){
                            return(
                            <MatchTab key={match.id} match={match} navigation={navigation}/>
                            );
                        }
                        currentDate = matchDate;
                        return(
                        <View key={currentDate}>
                            <Text style={styles.wmdText}>{displayDateWMD(currentDate)}</Text>
                            <MatchTab key={match.id} match={match} navigation={navigation}/>
                        </View>
                        );
                    })
                    :
                    <View>
                        <Text>LoL No Data</Text>
                    </View>
                    }
                </ScrollView>
            </View>
        );
    }
    
    return(
    <View>
        <Text>Loading...</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
    },
    scrollView: {
        marginBottom: 300,
    },
    arrowButton: {
        marginHorizontal: 20,
    },
    arrowText: {
        color: '#fff',
        fontSize: 30,
    },
    mdyText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        width: 275,
        fontSize: 16,
    },
    wmdText: {
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
    },
});

export default SchedulePage;