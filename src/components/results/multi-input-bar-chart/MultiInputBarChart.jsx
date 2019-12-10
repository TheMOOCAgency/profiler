import React, { useState, Fragment } from "react";
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
import SubmitButton from "../../forms/submit-button/SubmitButton";

const MultiInputBarChart = ({ test, tests }) => {
  const { sources, button } = test;
  const [isCompleted, setCompletion] = useState(false);
  const [data, setData] = useState([]);
  const { results } = useSelector(state => ({
    results: state.form
  }));

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmit = async () => {
    let formatedData = [];
    let rawData = {};

    // FIND SELECTED TESTS IN ORDER TO COMPARE ANSWERS
    await sources.map(async source => {
      let findTest = await tests.find(findTest => findTest.name === source.id);
      findTest.questions.map(question => {
        if (!rawData[question.driver]) {
          console.log(Number(results[source.id].values[question.id]));
          rawData[question.driver] = {};
          rawData[question.driver].name = findTest.drivers[question.driver];
          rawData[question.driver][source.id] = Number(
            results[source.id].values[question.id]
          );
          return rawData;
        } else {
          console.log(Number(results[source.id].values[question.id]));
          if (!rawData[question.driver][source.id]) {
            rawData[question.driver][source.id] = Number(
              results[source.id].values[question.id]
            );
          } else {
            rawData[question.driver][source.id] += Number(
              results[source.id].values[question.id]
            );
          }

          return rawData;
        }
      });
    });
    formatedData = Object.values(rawData);
    setData(formatedData);
    console.log(formatedData);
    setCompletion(true);
  };

  //   const renderBars = async () => {
  //     const colors = ["#b71b60", "#353535", "#949b9f"];
  //     return (
  //       <Fragment>
  //         {sources.map((source, index) => {
  //           return (
  //             <Bar
  //               dataKey={source.id}
  //               name={source.name}
  //               fill={colors[index]}
  //               key={source.id}
  //             />
  //           );
  //         })}
  //       </Fragment>
  //     );
  //   };

  if (!isCompleted) {
    return (
      <SubmitButton onClick={() => onSubmit()}>
        <Fragment>{button}</Fragment>
      </SubmitButton>
    );
  }

  return (
    <Grid container mt={5} justify="center">
      <ResponsiveContainer width="100%" height={500}>
        <Chart data={data} layout="vertical" style={{ fontSize: "12px" }}>
          <XAxis type="number" />
          <YAxis dataKey="name" reversed type="category" />
          {/* <Fragment>{renderBars()}</Fragment> */}
          <Bar dataKey="likert1-1" name="Test driver" fill="#b71b60" />
          <Bar dataKey="likert1-2" name="Auto-positionnement" fill="#353535" />
          <Legend />
        </Chart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default MultiInputBarChart;
