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

let requiredFields = [];

const validate = (formValues, props) => {
  const errors = {};
  props.test.questions.map(question => {
    if (requiredFields.indexOf(question.id) === -1) {
      requiredFields.push(question.id);
    }
    return requiredFields;
  });

  requiredFields.forEach(field => {
    if (!formValues[field]) {
      errors[field] = "";
    }
  });

  return errors;
};

const FreeField = ({ test, handleSubmit, pristine, submitting }) => {
  const { questions, button } = test;

  const renderCustomInput = ({ input }) => {
    return (
      <Fragment>
        <CssTextField
          id="outlined-multiline-static"
          multiline
          rows="6"
          variant="outlined"
          autoComplete="off"
          {...input}
        />
      </Fragment>
    );
  };

  const renderInputs = () => {
    return questions.map((question, index) => {
      return (
        <Grid container key={question.id}>
          <div style={{ margin: "30px 0 10px 0" }}>
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
        {/* {topic && <h3>{topic.toUpperCase()}</h3>} */}
        <Fragment>{renderInputs()}</Fragment>
      </FormGroup>
    </form>
  );
};

export default reduxForm({
  form: "",
  enableReinitialize: true,
  validate
})(FreeField);
