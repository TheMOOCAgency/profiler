import React, { Fragment, useEffect, useState } from "react";

import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend
} from "recharts";
import Grid from "@material-ui/core/Grid";

const BarChart = ({ data, test }) => {
  const { requiredForms, name } = test;
  const [chartHeight, setChartHeight] = useState(200);

  useEffect(() => {
    if (requiredForms) {
      console.log(chartHeight);
      setChartHeight(200 + requiredForms.length * 100);
    } else {
      setChartHeight(200);
    }
  }, [chartHeight, requiredForms]);

  // const renderBars = () => {
  //   const colors = ["#b71b60", "#353535", "#949b9f"];
  //   if (requiredForms) {
  //     return requiredForms.map((form, index) => (
  //       <Bar
  //         dataKey={form.id}
  //         name={form.name}
  //         fill={colors[index]}
  //         key={form.id}
  //       />
  //     ));
  //   } else {
  //     return <Bar dataKey={name} name="Test driver" fill={colors[0]} />;
  //   }
  // };
  const colors = ["#b71b60", "#353535", "#949b9f"];

  return (
    <Grid container mt={5} justify="center">
      <ResponsiveContainer width="100%" height={chartHeight}>
        <Chart data={data} layout="vertical" style={{ fontSize: "12px" }}>
          <XAxis type="number" />
          <Fragment>
            {requiredForms ? (
              <Fragment>
                <Bar
                  dataKey={requiredForms[0].id}
                  name={requiredForms[0].name}
                  fill={colors[0]}
                  key={requiredForms[0].id}
                />
                <Bar
                  dataKey={requiredForms[1].id}
                  name={requiredForms[1].name}
                  fill={colors[1]}
                  key={requiredForms[1].id}
                />
              </Fragment>
            ) : (
              <Bar dataKey={name} name="Test driver" fill={colors[0]} />
            )}
          </Fragment>
          <YAxis dataKey="name" reversed type="category" />
          {/* <Bar dataKey="form1" name="Test driver" fill="#b71b60" />
          <Bar dataKey="form2" name="Test driver" fill="#353535" /> */}
          {/* <Fragment>{renderBars()}</Fragment> */}
          <Legend />
        </Chart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default BarChart;
