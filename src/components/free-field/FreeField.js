import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#b71b60"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#b71b60"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b71b60"
      },
      "&:hover fieldset": {
        borderColor: "#353535"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#b71b60"
      }
    }
  }
})(TextField);

const FreeField = ({ questionIndex, question }) => {
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    console.log(value);
    setValue(event.target.value);
  };

  return (
    <Grid container>
      <div style={{ marginBottom: "10px" }}>
        {questionIndex + ". " + (question && question.text)}
      </div>
      <CssTextField
        id="outlined-multiline-static"
        multiline
        rows="6"
        defaultValue={value}
        onChange={handleChange}
        variant="outlined"
      />
    </Grid>
  );
};

export default FreeField;
