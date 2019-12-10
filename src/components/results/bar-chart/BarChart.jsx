import React, { useEffect, useState } from "react";

import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts";
import Grid from "@material-ui/core/Grid";

const BarChart = ({ data, test }) => {
  const { dataForms, topic } = test;
  const [chartHeight, setChartHeight] = useState(200);

  useEffect(() => {
    if (dataForms) {
      setChartHeight(200 + dataForms.length * 100);
    } else {
      setChartHeight(200);
    }
  }, [chartHeight, dataForms]);

  const renderBars = () => {
    const colors = [
      "#b71b60",
      "#353535",
      "#949b9f",
      "#b71b60",
      "#353535",
      "#949b9f",
      "#b71b60",
      "#353535",
      "#949b9f",
      "#b71b60",
      "#353535",
      "#949b9f"
    ];
    if (dataForms) {
      // MULTIPLE FORMS CASE
      return dataForms.map((form, index) => (
        <Bar
          dataKey={form.id}
          name={form.name}
          fill={colors[index]}
          key={form.id}
        />
      ));
    } else {
      // SINGLE FORM CASE
      return (
        <Bar dataKey="testTotal" name={topic}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      );
    }
  };

  return (
    <Grid container mt={5} justify="center">
      <ResponsiveContainer width="100%" height={chartHeight}>
        <Chart data={data} layout="vertical" style={{ fontSize: "12px" }}>
          <XAxis type="number" />
          {renderBars()}
          <YAxis dataKey="name" reversed type="category" />
          <Legend />
        </Chart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default BarChart;
