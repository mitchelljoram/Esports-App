import axios from "axios";

const tournamentOptions = {
    method: 'GET',
    url: 'https://league-of-legends-esports.p.rapidapi.com/tournaments',
    params: {leagueId:'98767991299243165'},
    headers: {
        'X-RapidAPI-Key': '23a40f78b9msh07933e704219c1ep1bd92ajsn37598b9b5981',
        'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
    }
};

axios.request(tournamentOptions).then(function (response: any) {
    console.log(response.data);
}).catch(function (error: any) {
    console.error(error);
});

const standingsOptions = {
    method: 'GET',
    url: 'https://league-of-legends-esports.p.rapidapi.com/standings/109517090066605615',
    headers: {
        'X-RapidAPI-Key': '23a40f78b9msh07933e704219c1ep1bd92ajsn37598b9b5981',
        'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
    }
};

axios.request(standingsOptions).then(function (response: any) {
    console.log(response.data);
}).catch(function (error: any) {
    console.error(error);
});