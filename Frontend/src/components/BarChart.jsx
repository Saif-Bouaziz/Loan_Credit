import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
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
      <XAxis dataKey={["refusée", "acceptée"]} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="refusée" fill="#8884d8" />
      <Bar dataKey="acceptée" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
  );
};

export default Chart;