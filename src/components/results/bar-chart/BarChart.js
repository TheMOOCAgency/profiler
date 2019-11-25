import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend
} from "recharts";
import Grid from "@material-ui/core/Grid";

const BarChart = ({ results, test }) => {
  const { questions, drivers } = test;

  const [data, setData] = useState([]);

  let rawData = {};
  let formatedData = [];

  const formatResults = () => {
    // console.log(results);
    results &&
      questions.map(question => {
        if (!rawData[question.driver]) {
          return (rawData[question.driver] = {
            name: drivers[question.driver],
            value: Number(0)
          });
        } else {
          return (rawData[question.driver].value += 0);
        }
      });
    formatedData = Object.values(rawData);
    console.log(formatedData);
    return formatedData;
  };

  useEffect(() => {
    setData(formatResults());
  }, [results]);

  return (
    <Grid container mt={5} justify="center">
      <ResponsiveContainer width="100%" height={500}>
        <Chart data={data} layout="vertical" style={{ fontSize: "12px" }}>
          <XAxis type="number" />
          <YAxis dataKey="name" reversed type="category" />
          <Bar dataKey="testTotal" name="Test driver" fill="#353535" />
          <Bar dataKey="selfTotal" name="Autopositionnement" fill="#b71b60" />
          <Bar
            dataKey="othersTotal"
            name="Evaluation par les pairs"
            fill="#949b9f"
          />
          <Legend />
        </Chart>
      </ResponsiveContainer>
    </Grid>
  );
};

const mapStateToProps = state => {
  return { results: state.form.test1.values };
};

export default connect(mapStateToProps)(BarChart);
