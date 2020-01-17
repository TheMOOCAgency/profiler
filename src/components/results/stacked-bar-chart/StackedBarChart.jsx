import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const StackedBarChart = ({ data }) => {
  // THIS FUNCTION ALLOWS US TO CUSTOMIZE xAxis VALUES
  const [ticks, setTicks] = useState([]);

  useEffect(() => {
    const renderTicks = () => {
      console.log(data, "data");
      let total = data[0].mark + data[0].rest;
      let ticksArray = [];
      for (let i = 0; i <= total; i++) {
        if (i % 10 === 0) {
          ticksArray.push(i);
        }
      }
      setTicks([...ticksArray]);
    };
    renderTicks();
  }, [data]);

  return (
    <Grid container justify="center">
      <ResponsiveContainer width="100%" height={200}>
        <Chart data={data} layout="vertical" style={{ fontSize: "12px" }}>
          <XAxis type="number" ticks={ticks} />
          <YAxis dataKey="name" reversed type="category" width={100} />
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
