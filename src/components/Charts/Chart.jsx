import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
import "./Chart.scss";
const Chart = ({data,}) => {

      
  return (
    <div className="chart">
      <h3 className="charttitle">Title</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={"Active user"} stroke="#8884d8" activeDot={{ r: 8 }} />
         
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
