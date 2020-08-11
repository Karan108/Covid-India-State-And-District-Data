import React from 'react'
import numeral from "numeral";
import "./Table.css";

function TableData({ tableData }) {

    return (
        <div>
            <table className="table-data">
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(({ name, data, index }) => (
                        <tr ><td key={index}>{name}</td><td key={index}>{numeral(data).format()}</td></tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableData
