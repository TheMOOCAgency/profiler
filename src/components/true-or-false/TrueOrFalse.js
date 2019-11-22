import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import RadioButton from "../radio-button/RadioButton";
import SubmitButton from "../submit-button/SubmitButton";
import { TableRow, TableCell, Table } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "20px 0",
    width: "100%",
    overflowX: "auto",
    padding: "20px"
  }
});

const TrueOrFalse = ({ test, questionIndex }) => {
  const { questions, answers, topic, wording } = test;
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState(true);

  const handleSelect = event => {
    console.log(event.target.value, selectedValue);
    if (event.target.value === "false") {
      setSelectedValue(false);
    } else {
      setSelectedValue(true);
    }
  };

  const renderButtons = () => {
    return (
      <div style={{ marginLeft: "30px", display: "flex" }}>
        {answers.map((answer, index) => {
          return (
            <div
              key={index}
              index={index}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100px"
              }}
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
          questions.map((question, index) => {
            return (
              <TableRow key={question.id} style={{ margin: "20px 0" }}>
                <TableCell
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    width: "60%",
                    textAlign: "justify"
                  }}
                >
                  {index + 1 + ". " + question.text}
                </TableCell>
                <TableCell>{renderButtons()}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    );
  };

  return (
    <Paper p={5} mt={5} mx="auto" className={classes.root}>
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
      <Table>{renderQuestions()}</Table>
      <SubmitButton text="Visualisez vos resultats" />
    </Paper>
  );
};

export default TrueOrFalse;
