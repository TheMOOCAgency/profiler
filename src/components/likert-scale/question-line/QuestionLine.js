import React, { useState, Fragment } from "react";
import RadioButton from "../../radio-button/RadioButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const QuestionLine = ({ question, answers, driver, collectResults }) => {
  const [selectedValue, setSelectedValue] = useState();

  const handleSelect = event => {
    setSelectedValue(parseInt(event.target.value));
    collectResults(question, driver, event.target.value);
  };

  const renderTableRows = () => {
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {question.text}
        </TableCell>
        {answers.map(answer => {
          return (
            <TableCell
              key={answer.value}
              align="center"
              // onClick={() => console.log(answer.value, driver)}
            >
              <RadioButton
                value={answer.value}
                selectedValue={selectedValue}
                handleSelect={handleSelect}
              />
            </TableCell>
          );
        })}
      </TableRow>
    );
  };

  return <Fragment>{renderTableRows()}</Fragment>;
};

export default QuestionLine;
