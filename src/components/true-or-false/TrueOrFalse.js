import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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

const TrueOrFalse = ({ question }) => {
  const classes = useStyles();

  return (
    <Paper p={5} mt={5} className={classes.root}>
      <h3 style={{ margin: "0 0 0 10px", fontSize: "16px", fontWeight: 500 }}>
        {question}
      </h3>
      <div></div>
    </Paper>
  );
};

export default TrueOrFalse;
