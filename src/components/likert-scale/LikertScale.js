import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import QuestionLine from "./question-line/QuestionLine";
import BarChart from "./bar-chart/BarChart";
import SubmitButton from "../submit-button/SubmitButton";

/* TABLE */
const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px 0",
    width: "100%",
    overflowX: "auto",
    padding: "20px",
    color: "#353535"
  },
  paper: { padding: "30px" },
  table: {
    minWidth: 650
  }
}));

const LikertScale = ({ test }) => {
  const { topic, questions, answers, drivers, wording } = test;
  const classes = useStyles();
  const [results, setResults] = useState({});
  const [totals, setTotals] = useState({});
  const [data, setData] = useState([]);
  // const [isDisplayed, setDisplay] = useState(false);

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
      total += Number(values[i]);
    }
    return total;
  };

  const getTotalPerDriver = () => {
    // console.log(results);
    Object.keys(results).map(driver => {
      return setTotals({
        ...totals,
        [driver]: sum(Object.values(results[driver]))
      });
    });
    getData();
  };

  const getData = () => {
    let newData = [];
    Object.entries(totals).map(key => {
      return newData.push({
        name: drivers[key[0]],
        uv: key[1],
        pv: key[1] / 2,
        av: key[1] / 3
      });
    });
    console.log(newData, "new");
    return setData(newData);
    // console.log(data, "data");
  };

  // useEffect(() => {
  //   getData();
  // }, [results]);

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
    <Paper className={classes.paper}>
      <h3>{topic}</h3>
      <p
        style={{
          width: "60%",
          textAlign: "justify",
          marginBottom: "30px",
          fontStyle: "italic",
          fontSize: "14px"
        }}
      >
        {wording}
      </p>
      <Table className={classes.table} aria-label="simple table">
        {renderTableHead()}
        {renderTableBody()}
      </Table>
      <SubmitButton
        text="Visualisez vos resultats"
        onSubmit={getTotalPerDriver}
      />

      <BarChart data={data} />
    </Paper>
  );
};

export default LikertScale;
