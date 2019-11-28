import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SubmitButton from "../submit-button/SubmitButton";
import FormGroup from "@material-ui/core/FormGroup";

const CssTextField = withStyles({
  root: {
    marginBottom: "10px",
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

const validate = (formValues, props) => {
  const errors = {};
  // if (!formValues.title) {
  //   errors.title = "You must enter a title";
  // }
  // if (!formValues.description) {
  //   errors.description = "You  enter a description";
  // }
  return errors;
};

const FreeField = ({ test, handleSubmit, pristine, submitting }) => {
  const { questions, button } = test;

  const renderCustomInput = formProps => {
    return (
      <CssTextField
        id="outlined-multiline-static"
        multiline
        rows="6"
        variant="outlined"
        autoComplete="off"
        {...formProps.input}
      />
    );
  };

  const renderInputs = () => {
    return questions.map((question, index) => {
      return (
        <Grid container key={question.id}>
          <div style={{ marginBottom: "10px" }}>
            {index + 1 + ". " + question.text}
          </div>
          <Field name={question.id} component={renderCustomInput} />
          <SubmitButton disabled={pristine || submitting}>
            <Fragment>{button}</Fragment>
          </SubmitButton>
        </Grid>
      );
    });
  };

  const onSubmit = formValues => {
    // SEND TO API
    let values = { name: test.name, values: formValues };
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Fragment>{renderInputs()}</Fragment>
      </FormGroup>
    </form>
  );
};

export default reduxForm({
  form: "",
  validate
})(FreeField);
