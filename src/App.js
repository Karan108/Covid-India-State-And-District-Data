import React, { useState, useEffect } from 'react';
import './App.css';
// import Box from "./components/box/Box";
import Stats from "./components/stats/Stats";
import NavBar from "./components/navbar/NavBar";
import { Grid } from '@material-ui/core';
import Chart from "./components/chart/Chart";
import StateSelector from "./components/stateSelector/StateSelector";
import Footer from "./components/footer/Footer";
import Precautions from "./components/precautions/Precautions";
import earth from "./earth_mask.svg";
import Symptoms from "./components/Symptoms/Symptoms";
import About from "./components/about/About";
import { getIndiaData, getNews, stateDistrictwise, statesAndDistrictData } from "./api/api";
import TableData from "./components/table/Table";
import { sort } from "./util/util";

function App() {
  // const [news, setNews] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [indiaData, setIndiaData] = useState({});
  const [statesName, setStatesName] = useState([]);
  const [districtName, setDistrictName] = useState([]);
  const [statesData, setStatesData] = useState({});
  const [stateSelected, setStateSelected] = useState('');
  const [tableData, setTableData] = useState([]);
  const [pieChartName, setPieChartName] = useState("");
  useEffect(() => {
    const getDataIndia = async () => {
      const { data: { Countries } } = await getIndiaData()
      setIndiaData(Countries[76]);
    }
    getDataIndia();
  }, []);
  // useEffect(() => {
  //   const news = async () => {
  //     setNews(await getNews());
  //   }
  //   news();
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await stateDistrictwise();
      setStatesData(data);
      setStatesName(Object.keys(data));
    }
    fetchData();
  }, [])
  useEffect(() => {
    const getStatesAndDistData = async () => {
      const { data: { data: { regional } } } = await statesAndDistrictData()
      const stateData = regional.map((state) => (
        {
          name: state.loc,
          data: state.totalConfirmed
        }
      ));
      const modified = sort(stateData);
      setTableData(modified);
    }
    getStatesAndDistData();
  }, []);
  const handleStateClick = (e) => {
    setStateSelected(e.target.value);
    if (e.target.value !== "") {
      setDistrictName(Object.keys(statesData[e.target.value].districtData));
    }
    setDistrictData([]);
  }
  const handleDistrictClick = (e) => {
    setDistrictData(statesData[stateSelected].districtData[e.target.value]);
    setPieChartName(e.target.value);
  }
  return (
    <div className="app">
      <a name="home"></a>
      <NavBar />
      <div className="heading">
        <img src={earth} alt="earth" className="earth-pic" />
        <h1 className="title">Wear a mask. Save lives.</h1>
      </div>
      <Grid container className="lrcontainer">
        <Grid item xs={12} md={9} lg={9} className="left">
          <div className="stats_container">
            <Stats title="Cases" cases={indiaData.NewConfirmed} total={indiaData.TotalConfirmed} borderClr="confirmed" isred />
            <Stats title="Recovered" cases={indiaData.NewRecovered} total={indiaData.TotalRecovered} borderClr="recovered" />
            <Stats title="Deaths" cases={indiaData.NewDeaths} total={indiaData.TotalDeaths} borderClr="dead" isred />
          </div>
          <div className="selectors">
            <StateSelector className="state" states={statesName} fun={handleStateClick} placeHol="State" />
            {stateSelected && <StateSelector states={districtName} fun={handleDistrictClick} placeHol="District" />}
          </div>
          <Chart cases={indiaData.cases} recovered={indiaData.recovered} deaths={indiaData.deaths} stateSelected={stateSelected} districtData={districtData} name={pieChartName} />
        </Grid>
        <Grid item xs={12} md={3} lg={3} className="right">
          <div className="data-table"><TableData tableData={tableData} /></div>
          {/* <div className="news">{news.map((newsItem, index) => (<Box key={index} title={newsItem.title} newsUrl={newsItem.url} url={newsItem.urlToImage} />))}</div> */}
        </Grid>
      </Grid>
      <a name="about"></a>
      <div className="about">
        <About />
      </div>
      <a name="symptoms"></a>
      <div className="symptoms">
        <Symptoms />
      </div>
      <a name="precautions"></a>
      <div className="precautions">
        <Precautions />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div >
  );
}

export default App;
