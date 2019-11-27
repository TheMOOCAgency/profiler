import React, { Fragment, useState } from "react";
import { Field, reduxForm } from "redux-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import SubmitButton from "../submit-button/SubmitButton";
import BarChart from "../../results/bar-chart/BarChart";

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

let requiredFields = [];

const validate = (values, props) => {
  const errors = {};
  props.test.questions.map(question => {
    if (requiredFields.indexOf(question.id) === -1) {
      requiredFields.push(question.id);
    }
    return requiredFields;
  });

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

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
const LikertForm = ({ handleSubmit, pristine, submitting, test, form }) => {
  const { questions, answers, button } = test;

  const [isCompleted, setCompletion] = useState(false);

  const classes = useStyles();

  const renderHeader = () => {
    return (
      <Grid container direction="row" justify="flex-end">
        <Grid item md={5} sm={false} />
        <Grid
          item
          md={7}
          sm={12}
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
          <Grid item md={4} sm={12} style={{ fontSize: "14px" }}>
            {question.text}
          </Grid>
          <Grid item md={1} sm={false} />
          <Grid item md={7} sm={12}>
            <Field
              name={question.id}
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
    setCompletion(true);
    return formValues;
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Fragment>{renderHeader()}</Fragment>
          <Fragment>{renderQuestions()}</Fragment>
          <SubmitButton disabled={pristine || submitting}>
            <Fragment>{button}</Fragment>
          </SubmitButton>
        </FormGroup>
      </form>
      <Fragment>{isCompleted && <BarChart test={test} />}</Fragment>
    </Fragment>
  );
};

export default reduxForm({ form: "", validate })(LikertForm);
