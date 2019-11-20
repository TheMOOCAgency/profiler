import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import Grid from "@material-ui/core/Grid";

const BarCharts = ({ data }) => {
  return (
    <Grid>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </Grid>
  );
};

export default BarCharts;
