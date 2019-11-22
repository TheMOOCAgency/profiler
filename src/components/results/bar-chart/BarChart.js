import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend
} from "recharts";
import Grid from "@material-ui/core/Grid";

const BarCharts = ({ data }) => {
  return (
    <Grid container mt={5} justify="center">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} layout="vertical" style={{ fontSize: "12px" }}>
          <XAxis type="number" />
          <YAxis dataKey="name" reversed type="category" />
          <Bar dataKey="uv" name="Test driver" fill="#353535" />
          <Bar dataKey="pv" name="Autopositionnement" fill="#b71b60" />
          <Bar dataKey="av" name="Evaluation par les pairs" fill="#949b9f" />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default BarCharts;
