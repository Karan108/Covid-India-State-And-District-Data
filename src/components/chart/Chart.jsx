import React, { useState, useEffect } from 'react'
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "./Chart.css";
import { indiaHistory, statesAndDistrictData } from "../../api/api";

function Chart({ country = "India", stateSelected, districtData, ...props }) {
    const [{ cases, deaths, recovered }, setCountryHistory] = useState({});
    const [dataOfSelected, setDataOfSelected] = useState({});
    var dates, caseData, deathData, recoveredData = "";
    var bcase, brecov, bdeath = "";
    useEffect(() => {
        const getHistoryData = async () => {
            setCountryHistory(await indiaHistory());
        }
        getHistoryData();
    }, [])
    useEffect(() => {
        const getStatesAndDistData = async () => {
            const { data: { data: { regional } } } = await statesAndDistrictData()
            setDataOfSelected(regional.filter((data) => {
                return data.loc === stateSelected;
            }))
        }
        getStatesAndDistData();
    }, [stateSelected]);
    if (cases) {
        dates = Object.keys(cases);
        caseData = Object.values(cases);
        deathData = Object.values(deaths);
        recoveredData = Object.values(recovered);
    }
    Array.prototype.forEach.call(dataOfSelected, child => {
        bcase = child.confirmedCasesIndian;
        brecov = child.discharged;
        bdeath = child.deaths;
    });

    const barChart = (
        <Bar data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [bcase, brecov, bdeath]
            }],

        }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current State in ${stateSelected}` }
            }}
        />
    );
    const lineGraph = (
        <Line
            data={
                {
                    labels: dates,
                    datasets: [{
                        data: caseData,
                        label: 'Infected',
                        borderColor: 'rgba(0, 0, 255, 0.5)',
                        fill: true
                    },
                    {
                        data: recoveredData,
                        label: 'Recoveries',
                        borderColor: "green",
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true
                    },
                    {
                        data: deathData,
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }
                    ]
                }
            }
        />
    );
    const state = {
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: 'Covid-19 status',
                backgroundColor: [
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255,0,0,0.5)',
                ],
                hoverBackgroundColor: [
                    'rgba(0, 0, 255, 0.7)',
                    'rgba(0, 255, 0, 0.7)',
                    'rgba(255,0,0,0.7)',
                ],
                data: [districtData.confirmed, districtData.recovered, districtData.deceased]
            }
        ]
    }
    const doughnutGraph = (
        <Doughnut
            data={state}
            options={{
                title: {
                    display: true,
                    text: 'Stats District wise',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }}
        />
    );
    return (
        <div className="graph-container">
            {districtData.length !== 0 ? doughnutGraph : stateSelected === "" ? lineGraph : barChart}
            {/* <div>
                {stateTable.map(({ name, data }) => (
                    <tr><td>{name}</td><td><strong>{numeral(data).format()}</strong></td></tr>
                ))}
            </div> */}
        </div>
    )
}

export default Chart;
