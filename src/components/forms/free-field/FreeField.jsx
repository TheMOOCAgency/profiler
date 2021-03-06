import React, { Fragment } from "react";
import { reduxForm, Field } from "redux-form";
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
    // REQUIRED FIELD DESACTIVATION TO IMPROVE
    if (
      requiredFields.indexOf(question.id) === -1 &&
      question.id !== "field3-5-0" &&
      question.id !== "field3-5-1" &&
      question.id !== "field3-5-2" &&
      question.id !== "field3-5-3"
    ) {
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

// THIS COMPONENT HAS TO BE OUT OF THE MAIN COMPONENT, OTHERWISE IT WILL RE-RENDER AT ANY TEXT CHANGE AND LOSE FOCUS
const renderCustomInput = ({ input }) => {
  return (
    <CssTextField
      multiline
      rows="4"
      variant="outlined"
      autoComplete="off"
      {...input}
      inputProps={{
        maxLength: 500
      }}
    />
  );
};

const FreeField = ({
  test,
  handleSubmit,
  pristine,
  submitting,
  setScormData
}) => {
  const { questions, button, topic, wording, additionalText } = test;

  const createMarkup = element => {
    return { __html: element };
  };

  const renderInputs = () => {
    return questions.map((question, index) => {
      return (
        <FormControl key={question.id}>
          <Grid container>
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
            <Field
              name={question.id}
              component={renderCustomInput}
              style={{ width: "100%" }}
            />
          </Grid>
        </FormControl>
      );
    });
  };

  const onSubmit = () => {
    setScormData();
  };

  return (
    <Grid item xs={12} md={12} xl={12}>
      <form onSubmit={handleSubmit(onSubmit)} className="to-print">
        <FormGroup>
          <div>
            {topic && (
              <h4
                style={{
                  margin: "0",
                  width: "calc(100% - 33px)",
                  position: "relative",
                  padding: "10px 0 10px 33px",
                  backgroundColor: "#b71b60",
                  color: "white",
                  borderRadius: "5px",
                  fontSize: "14px"
                }}
              >
                {/* <img
                  src={freeField}
                  alt="likert-logo"
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "12px",
                    height: "40%"
                  }}
                /> */}

                <i
                  className="fas fa-pen"
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "12px",
                    fontSize: "15px"
                  }}
                />
                {topic.toUpperCase()}
                <span
                  style={{
                    fontSize: "10px",
                    marginLeft: "5px"
                  }}
                >
                  {additionalText}
                </span>
              </h4>
            )}
            <Fragment>
              {wording && (
                <h4
                  style={{
                    margin: "0",
                    fontWeight: "400",
                    width: "100%",
                    padding: "10px 0",
                    fontSize: "14px",
                    textAlign: "justify"
                  }}
                >
                  {wording}
                </h4>
              )}
            </Fragment>
          </div>

          <Fragment>{renderInputs()}</Fragment>
          <SubmitButton
            role="save"
            disabled={pristine || submitting}
            className="reveal-slow"
          >
            <Fragment>{button}</Fragment>
          </SubmitButton>
        </FormGroup>
      </form>
    </Grid>
  );
};

export default reduxForm({
  form: "",
  // enableReinitialize: true,
  validate
})(FreeField);
