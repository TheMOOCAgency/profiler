import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import QuestionLine from "./question-line/QuestionLine";
import BarChart from "./bar-chart/BarChart";
import Button from "@material-ui/core/Button";

/* TABLE */
const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px 0",
    width: "70%",
    overflowX: "auto",
    padding: "20px"
  },
  button: {
    margin: "30px 0",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      color: "black"
    }
  },
  table: {
    minWidth: 650
  }
}));

const LikertScale = ({ topicIndex, topic, questions, answers }) => {
  const classes = useStyles();
  const [results, setResults] = useState({});
  const [totals, setTotals] = useState({});
  const [data, setData] = useState([]);

  // GET AN OBJECT WILL ALL RESULTS BY DRIVER
  const collectResults = (question, driver, value) => {
    setResults({
      ...results,
      [driver]: { ...results[driver], [`id${question.id}`]: value }
    });
  };

  const sum = values => {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
      if (isNaN(values[i])) {
        continue;
      }
      total += Number(values[i]);
    }
    return total;
  };

  const getTotalPerDriver = () => {
    Object.keys(results).map(driver => {
      return setTotals({
        ...totals,
        [driver]: sum(Object.values(results[driver]))
      });
    });
    console.log(totals);
  };

  const getData = () => {
    let newData = [];
    Object.entries(totals).map(key => {
      newData.push({ name: key[0], uv: key[1] });
      return setData(newData);
    });
    // console.log(data, "data");
  };

  useEffect(() => {
    getData();
  }, [totals]);

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
      <h3
        style={{ margin: "0 0 10px 10px", fontSize: "16px", fontWeight: 500 }}
      >
        {topicIndex + ". " + topic}
      </h3>
      <Table className={classes.table} aria-label="simple table">
        {renderTableHead()}
        {renderTableBody()}
      </Table>
      <Button
        variant="outlined"
        size="large"
        className={classes.button}
        onClick={getTotalPerDriver}
      >
        Soumettre
      </Button>
      <BarChart data={data} />
    </Paper>
  );
};

export default LikertScale;
