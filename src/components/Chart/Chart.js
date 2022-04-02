import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const values = props.datapoints.map(datapoint => datapoint.value);
    const maxValue = Math.max(...values);

    return (
        <div className="chart">
            {props.datapoints.map(datapoint => <ChartBar 
                                                    key={datapoint.label}
                                                    value={datapoint.value} 
                                                    maxValue={maxValue} 
                                                    label={datapoint.label}/>)}
        </div>
    )
}

export default Chart;