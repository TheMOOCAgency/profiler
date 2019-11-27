import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend
} from "recharts";
import Grid from "@material-ui/core/Grid";

const BarChart = ({ test }) => {
  const { questions, drivers } = test;
  const [data, setData] = useState([]);

  // REACT-REDUX WITH HOOKS, REPLACE MAPSTATETOPROPS
  const { results } = useSelector(state => ({
    results: state.form.likert.values
  }));

  // FORMAT THE DATA SO IT MATCHES WITH BARCHART FORMAT
  useEffect(() => {
    let rawData = {};
    let formatedData = [];
    const formatResults = () => {
      results &&
        questions.map(question => {
          if (!rawData[question.driver]) {
            return (rawData[question.driver] = {
              name: drivers[question.driver],
              testTotal: Number(results[question.id]),
              selfTotal: 15,
              othersTotal: 18
            });
          } else {
            return (rawData[question.driver].testTotal += Number(
              results[question.id]
            ));
          }
        });
      formatedData = Object.values(rawData);
      setData(formatedData);
    };
    formatResults();
  }, [results, drivers, questions]);

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

export default BarChart;
