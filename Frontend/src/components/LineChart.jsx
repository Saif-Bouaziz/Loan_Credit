import React, { PureComponent } from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CreditChart = ({ data }) => {
  const chartData = Object.entries(data).map(([credit_amount,count]) => ({credit_amount,count }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"count"} />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey={"credit_amount"} stroke="#B2BEB5"  strokeWidth={4} fill="#B2BEB5" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CreditChart;





