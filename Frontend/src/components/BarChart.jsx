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
      <Bar dataKey="refusée" fill="#A9A9A9" />
      <Bar dataKey="acceptée" fill="#F5CB5C" />
    </BarChart>
  </ResponsiveContainer>
  );
};

export default Chart;