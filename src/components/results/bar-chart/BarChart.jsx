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
  const { dataForms, topic, multiColor, result } = test;
  const [chartHeight, setChartHeight] = useState(200);

  useEffect(() => {
    if (dataForms) {
      setChartHeight(200 + dataForms.length * 100);
    } else {
      setChartHeight(300);
    }
  }, [chartHeight, dataForms]);
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
  const renderLegend = props => {
    const { payload } = props;

    return (
      <ul style={{ listStyle: "none" }}>
        {payload.map((entry, index) => (
          <div
            style={{ display: "flex", alignItems: "center" }}
            key={`item-${index}`}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: colors[index],
                marginRight: "5px"
              }}
            />
            <li>{entry.value}</li>
          </div>
        ))}
      </ul>
    );
  };

  const renderBars = () => {
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
            <Cell
              style={{ opacity: "0.8" }}
              key={`cell-${index}`}
              fill={!multiColor ? colors[0] : colors[index]}
            />
          ))}
        </Bar>
      );
    }
  };

  return (
    <Grid container mt={5} justify="center">
      <ResponsiveContainer width="100%" height={chartHeight}>
        <Chart data={data} layout="vertical" style={{ fontSize: "12px" }}>
          <XAxis type="number" ticks={[""]} />
          {renderBars()}
          <YAxis dataKey="name" reversed type="category" width={100} />
          {result.legend && <Legend content={renderLegend} />}
        </Chart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default BarChart;
