import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useSelector from "../../hooks/useSelector";

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

const RadioButton = ({ value }) => {
  const [selectedValue] = useSelector();
  return (
    <div>
      <CustomRadio
        checked={selectedValue === value}
        onChange={useSelector}
        value={value}
        name="radio-button-demo"
        inputProps={{ "aria-label": value }}
      />
    </div>
  );
};

const QuestionLine = ({ row }) => {
  //   const [selectedValue, setSelectedValue] = useState(0);
  //   const [selectedValue] = useSelector();
  //   const useSelector = event => {
  //     useSelector(event);
  //   };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer1}
          //   handleSelect={useSelector}
          //   selectedValue={selectedValue}
        />
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer2}
          //   handleSelect={useSelector}
          //   selectedValue={selectedValue}
        />
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer3}
          //   handleSelect={useSelector}
          //   selectedValue={selectedValue}
        />
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer4}
          //   handleSelect={useSelector}
          //   selectedValue={selectedValue}
        />
      </TableCell>
      <TableCell align="center">
        <RadioButton
          value={row.answer5}
          //   handleSelect={useSelector}
          //   selectedValue={selectedValue}
        />
      </TableCell>
    </TableRow>
  );
};

export default QuestionLine;
