import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import Grid from "@material-ui/core/Grid";

const BarCharts = () => {
  const data = [
    {
      name: "Page A",
      uv: 10
    },
    {
      name: "Page B",
      uv: 25
    },
    {
      name: "Page C",
      uv: 20
    },
    {
      name: "Page D",
      uv: 25
    },
    {
      name: "Page E",
      uv: 30
    }
  ];
  return (
    <Grid>
      <BarChart
        layout="vertical"
        width={900}
        height={900}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid layout="vertical" strokeDasharray="3 3" />
        <XAxis />
        <YAxis dataKey="name" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </Grid>
  );
};

export default BarCharts;
