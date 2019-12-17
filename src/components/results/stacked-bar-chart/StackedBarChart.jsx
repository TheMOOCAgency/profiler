import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const StackedBarChart = ({ data }) => {
  return (
    <Grid container justify="center">
      <ResponsiveContainer width="100%" height={200}>
        <Chart data={data} layout="vertical" style={{ fontSize: "10px" }}>
          <XAxis type="number" />
          <YAxis dataKey="name" reversed type="category" />
          <Bar dataKey="mark" stackId="a" name="Mon score" fill="#b71b60" />
          <Bar
            dataKey="rest"
            stackId="a"
            name="Autopositionnement"
            fill="#949b9f"
          />
        </Chart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default StackedBarChart;
