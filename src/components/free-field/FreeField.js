import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

const FreeField = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper p={5} mt={5} className={classes.root}>
        <Grid container></Grid>
      </Paper>
    </div>
  );
};

export default FreeField;
