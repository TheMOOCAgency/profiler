import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

/* RADIO BUTTON */
const CustomRadio = withStyles({
  root: {
    color: "black",
    "&$checked": {
      color: "black"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const RadioButton = ({ value, selectedValue, handleChange }) => {
  return (
    <div>
      <CustomRadio
        checked={selectedValue === value}
        onChange={handleChange}
        value={value}
        name="radio-button-demo"
        inputProps={{ "aria-label": value }}
      />
    </div>
  );
};

const QuestionLine = ({ row }) => {
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = event => {
    console.log(event.target.value);
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer1}
          handleChange={handleChange}
          selectedValue={selectedValue}
        />
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer2}
          handleChange={handleChange}
          selectedValue={selectedValue}
        />
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer3}
          handleChange={handleChange}
          selectedValue={selectedValue}
        />
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer4}
          handleChange={handleChange}
          selectedValue={selectedValue}
        />
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer5}
          handleChange={handleChange}
          selectedValue={selectedValue}
        />
      </TableCell>
    </TableRow>
  );
};

export default QuestionLine;
