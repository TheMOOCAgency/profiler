import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import RadioButton from "../radio-button/RadioButton";
import SubmitButton from "../submit-button/SubmitButton";

const useStyles = makeStyles({
  root: {
    margin: "20px 0",
    width: "100%",
    overflowX: "auto",
    padding: "20px"
  }
});

const TrueOrFalse = ({ questions, answers, questionIndex }) => {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState(true);

  const handleSelect = event => {
    console.log(event.target.value, selectedValue);
    setSelectedValue(parseInt(event.target.value));
  };

  const renderButtons = () => {
    return (
      <div style={{ marginBottom: "30px" }}>
        {answers.map((answer, index) => {
          return (
            <div
              key={index}
              index={index}
              style={{ display: "flex", alignItems: "center" }}
            >
              <RadioButton
                value={answer.value}
                selectedValue={selectedValue}
                handleSelect={handleSelect}
              />
              <div>{answer.text}</div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderQuestions = () => {
    return (
      <TableBody>
        {questions &&
          questions.map(question => {
            return (
              <div key={question.id}>
                <h3
                  style={{
                    margin: "0 0 10px 10px",
                    fontSize: "16px",
                    fontWeight: 500,
                    width: "80%"
                  }}
                >
                  {questionIndex + ". " + question.text}
                </h3>
                <div>{renderButtons()}</div>
              </div>
            );
          })}
      </TableBody>
    );
  };

  return (
    <Paper p={5} mt={5} mx="auto" className={classes.root}>
      <>{renderQuestions()}</>
      <SubmitButton text="Visualisez vos resultats" />
    </Paper>
  );
};

export default TrueOrFalse;
