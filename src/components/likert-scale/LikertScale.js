import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import QuestionLine from "./question-line/QuestionLine";
import BarChart from "./bar-chart/BarChart";

/* TABLE */
const useStyles = makeStyles({
  root: {
    margin: "20px 0",
    width: "60%",
    overflowX: "auto",
    padding: "20px"
  },
  table: {
    minWidth: 650
  }
});

const LikertScale = ({ topicIndex, topic, questions, answers }) => {
  const classes = useStyles();
  const [results, setResults] = useState({});

  // GET AN OBJECT WILL ALL RESULTS BY DRIVER
  const collectResults = (question, driver, value) => {
    setResults({
      ...results,
      [driver]: { ...results[driver], [`id${question.id}`]: value }
    });
    console.log(results);
  };

  const getTotalPerDriver = () => {};

  const renderTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          {answers.map(answer => {
            return (
              <TableCell
                align="center"
                key={answer.value}
                style={{ width: "100px" }}
              >
                {answer.name}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  };

  const renderTableBody = () => {
    return (
      <TableBody>
        {Object.keys(questions).map(driver =>
          questions[driver].map(question => {
            return (
              <QuestionLine
                driver={driver}
                question={question}
                answers={answers}
                key={question.id}
                collectResults={collectResults}
              />
            );
          })
        )}
      </TableBody>
    );
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={getTotalPerDriver}>
        <h3
          style={{ margin: "0 0 10px 10px", fontSize: "16px", fontWeight: 500 }}
        >
          {topicIndex + ". " + topic}
        </h3>
        <Table className={classes.table} aria-label="simple table">
          {renderTableHead()}
          {renderTableBody()}
        </Table>
      </form>
      <button type="submit" />
      <BarChart />
    </Paper>
  );
};

export default LikertScale;
