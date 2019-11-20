import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RadioButton from "../radio-button/RadioButton";

const useStyles = makeStyles({
  root: {
    margin: "20px 0",
    width: "60%",
    overflowX: "auto",
    padding: "20px"
  }
});

const TrueOrFalse = ({ question, answers, questionIndex }) => {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState(true);

  const handleSelect = event => {
    console.log(event.target.value, selectedValue);
    setSelectedValue(parseInt(event.target.value));
  };

  const renderButtons = () => {
    return answers.map((answer, index) => {
      return (
        <div
          key={index}
          onClick={() => console.log(answer, "erfef")}
          index={index}
          style={{ display: "flex", alignItems: "center" }}
        >
          <RadioButton
            value={answer}
            selectedValue={selectedValue}
            handleSelect={handleSelect}
          />
          <div>{answer.toString()}</div>
        </div>
      );
    });
  };

  return (
    <Paper p={5} mt={5} className={classes.root}>
      <h3
        style={{ margin: "0 0 10px 10px", fontSize: "16px", fontWeight: 500 }}
      >
        {questionIndex + ". " + question}
      </h3>
      <Grid>{renderButtons()}</Grid>
    </Paper>
  );
};

export default TrueOrFalse;
