import React from "react";

import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend
} from "recharts";
import Grid from "@material-ui/core/Grid";

const BarChart = ({ data }) => {
  return (
    <Grid container mt={5} justify="center">
      <ResponsiveContainer width="100%" height={200}>
        <Chart data={data} layout="vertical" style={{ fontSize: "12px" }}>
          <XAxis type="number" />
          <YAxis dataKey="name" reversed type="category" />
          <Bar dataKey="testTotal" name="Test driver" fill="#b71b60" />
          {/* <Bar dataKey="selfTotal" name="Autopositionnement" fill="#b71b60" />
          <Bar
            dataKey="othersTotal"
            name="Evaluation par les pairs"
            fill="#949b9f"
          /> */}
          <Legend />
        </Chart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default BarChart;
