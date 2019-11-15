import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import QuestionLine from "./question-line/QuestionLine";

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

const createData = (name, answer1, answer2, answer3, answer4, answer5) => {
  return { name, answer1, answer2, answer3, answer4, answer5 };
};

const rows = [
  createData("Question 1", 0, 1, 2, 3, 4),
  createData("Question 2", 0, 1, 2, 3, 4),
  createData("Question 3", 0, 1, 2, 3, 4),
  createData("Question 4", 0, 1, 2, 3, 4),
  createData("Question 5", 0, 1, 2, 3, 4)
];

const SimpleTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">3</TableCell>
            <TableCell align="center">4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <QuestionLine row={row} key={index} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const LikertScale = () => {
  return <SimpleTable />;
};

export default LikertScale;
