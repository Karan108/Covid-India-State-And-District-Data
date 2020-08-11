import axios from "axios";

export const getIndiaData = async () => {
    // const { data: { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths } } = await axios.get("https://disease.sh/v3/covid-19/countries/IND")
    // return {
    //     cases, todayCases, recovered, todayRecovered, deaths, todayDeaths
    // };
    const data = axios.get("https://api.covid19api.com/summary")
    return data;
}

export const getNews = async () => {
    const { data: { articles } } = await axios.get("http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4bc25ccba1a142d580b320b3f3a13c63")
    return articles;
}

export const stateDistrictwise = async () => {
    const { data } = await axios.get("https://api.covid19india.org/state_district_wise.json")
    return data;
}

export const indiaHistory = async () => {
    const { data: { timeline } } = await axios.get("https://disease.sh/v3/covid-19/historical/IND?lastdays=120")
    return timeline;
}

export const statesAndDistrictData = async () => {
    const data = axios.get("https://api.rootnet.in/covid19-in/stats/latest")
    return data;
}