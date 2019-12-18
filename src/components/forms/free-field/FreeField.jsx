import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SubmitButton from "../submit-button/SubmitButton";
import FormGroup from "@material-ui/core/FormGroup";
import { FormControl } from "@material-ui/core";

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

const FreeField = ({
  test,
  handleSubmit,
  pristine,
  submitting,
  setLocalStorage
}) => {
  const { questions, button, topic } = test;

  const createMarkup = element => {
    return { __html: element };
  };

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
        <FormControl key={question.id}>
          <Grid container key={question.id}>
            <div style={{ margin: "30px 0 10px 0" }}>
              {question.text && questions.length > 1
                ? index + 1 + ". " + question.text
                : question.text}
              {question.html && (
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    index + 1 + ". " + question.html
                  )}
                />
              )}
            </div>
            <Field name={question.id} component={renderCustomInput} />
          </Grid>
        </FormControl>
      );
    });
  };

  const onSubmit = formValues => {
    // SEND TO API
    setLocalStorage();
    let values = { name: test.name, values: formValues };
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="to-print">
      <FormGroup>
        {topic && (
          <h4
            style={{
              margin: "0",
              fontStyle: "italic",
              padding: "10px",
              backgroundColor: "#b71b60",
              color: "white",
              borderRadius: "5px",
              fontSize: "14px"
            }}
          >
            {topic.toUpperCase()}
          </h4>
        )}
        <Fragment>{renderInputs()}</Fragment>
        <SubmitButton disabled={pristine || submitting}>
          <Fragment>{button}</Fragment>
        </SubmitButton>
      </FormGroup>
    </form>
  );
};

export default reduxForm({
  form: "",
  enableReinitialize: true,
  validate
})(FreeField);
