import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

const CustomRadio = withStyles({
  root: {
    color: "black",
    "&$checked": {
      color: "black"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const RadioButton = ({ value, selectedValue, handleSelect }) => {
  return (
    <div>
      <CustomRadio
        checked={selectedValue === value}
        onChange={handleSelect}
        value={value}
        name={`radio-button-demo${Math.random * 100}`}
        inputProps={{ "aria-label": value }}
      />
    </div>
  );
};

export default RadioButton;
