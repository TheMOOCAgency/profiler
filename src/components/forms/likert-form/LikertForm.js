import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import SubmitButton from "../submit-button/SubmitButton";

const CustomRadio = withStyles({
  root: {
    color: "#b71b53",
    "&$checked": {
      color: "#b71b53"
    },
    margin: "0 auto"
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  questionLine: {
    borderBottom: "1px solid rgba(75,75,75,0.2)",
    padding: "20px 0"
  }
}));
const validate = values => {
  const errors = {};
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "favoriteColor",
    "notes"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

/* BUTTON LINE */
const radioButtons = ({ answers, salut, input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest} row>
      {answers.map(answer => {
        return (
          <FormControlLabel
            style={{
              opacity: `${0.5 + answer.value / 15}`,
              width: "100px",
              display: "flex",
              margin: "0 auto",
              justifyContent: "space-around"
            }}
            key={answer.value}
            value={answer.value.toString()}
            control={<CustomRadio />}
          />
        );
      })}
    </RadioGroup>
  </FormControl>
);

/* MAIN COMPONENT */
const LikertForm = ({ handleSubmit, pristine, submitting, test }) => {
  const { questions, answers, topic, wording, button } = test;
  const classes = useStyles();

  const renderHeader = () => {
    return (
      <Grid container direction="row" justify="flex-end">
        <Grid item md={4} />
        <Grid item md={1} />
        <Grid
          item
          md={7}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Grid container direction="row">
            {answers &&
              answers.map(answer => {
                return (
                  <div
                    key={answer.value}
                    style={{
                      width: "100px",
                      fontSize: "14px",
                      textAlign: "center"
                    }}
                  >
                    {answer.name}
                  </div>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderQuestions = () => {
    return (
      questions &&
      questions.map(question => (
        <Grid
          key={question.id}
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          className={classes.questionLine}
        >
          <Grid item md={4} style={{ fontSize: "14px" }}>
            {question.text}
          </Grid>
          <Grid item md={1} />
          <Grid item md={7}>
            <Field
              name={`question${question.id}`}
              answers={answers}
              component={radioButtons}
            />
          </Grid>
        </Grid>
      ))
    );
  };

  const onSubmit = formValues => {
    // no need e.preventdefault as handleSubmit handles it
    this.props.onSubmit(formValues);
  };

  return (
    <Fragment>
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
      <FormGroup onSubmit={handleSubmit(onSubmit)}>
        <Fragment>{renderHeader()}</Fragment>
        <Fragment>{renderQuestions()}</Fragment>
        <SubmitButton text={button} />
        {/* <button type="submit" disabled={pristine || submitting}>
          Submit
        </button> */}
      </FormGroup>
    </Fragment>
  );
};

export default reduxForm({
  form: "test1",
  validate
})(LikertForm);
