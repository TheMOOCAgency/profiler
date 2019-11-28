import React, { Fragment, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import SubmitButton from "../submit-button/SubmitButton";
import BarChart from "../../results/bar-chart/BarChart";
import StackedBarChart from "../../results/stacked-bar-chart/StackedBarChart";

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
const LikertForm = ({ handleSubmit, pristine, submitting, test }) => {
  const {
    questions,
    answers,
    button,
    wording,
    topic,
    type,
    result,
    name,
    drivers
  } = test;

  const [isCompleted, setCompletion] = useState(false);
  const [size, setSize] = useState({});
  const [data, setData] = useState([]);

  // REACT-REDUX WITH HOOKS, REPLACE MAPSTATETOPROPS
  const { results } = useSelector(state => ({
    results: state.form[name].values
  }));

  const classes = useStyles();

  useEffect(() => {
    // ADAPT SIZE WHETHER IT'S A LIKERT SCALE OR A TRUE/FALSE
    const resize = () => {
      if (type === "likert") {
        setSize({ questions: 5, blank: 1, answers: 6 });
      } else if (type === "true-or-false") {
        setSize({ questions: 7, blank: 1, answers: 4 });
      }
    };
    resize();
  }, [type]);

  const renderWording = () => {
    return (
      <Fragment>
        {topic ||
          (wording && (
            <Fragment>
              <h3>{topic}</h3>
              <Grid
                item
                md={7}
                sm={12}
                style={{
                  textAlign: "justify",
                  marginBottom: "30px",
                  fontStyle: "italic",
                  fontSize: "14px"
                }}
              >
                {wording}
              </Grid>
            </Fragment>
          ))}
      </Fragment>
    );
  };

  const renderHeader = () => {
    return (
      <Grid container direction="row" justify="flex-end">
        <Grid item md={size.questions} sm={false} />
        <Grid item md={size.blank} sm={false} />
        <Grid
          item
          md={size.answers}
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
      questions.map((question, index) => (
        <Grid
          key={question.id}
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          className={classes.questionLine}
        >
          <Grid item md={size.questions} sm={12} style={{ fontSize: "14px" }}>
            {index + 1 + ". " + question.text}
          </Grid>
          <Grid item md={size.blank} sm={false} />
          <Grid item md={size.answers} sm={12}>
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

  const renderSubmitButton = () => {
    return (
      <Fragment>
        {result ? (
          <SubmitButton disabled={pristine || submitting}>
            <Fragment>{button}</Fragment>
          </SubmitButton>
        ) : (
          <div
            item
            md={12}
            style={{
              height: "10px",
              backgroundColor: "#b71b53",
              borderRadius: "5px",
              margin: "50px 0",
              opacity: "0.5"
            }}
          />
        )}
      </Fragment>
    );
  };

  const renderResult = () => {
    if (result === "histogram") {
      return (
        <Fragment>
          {isCompleted && result && <BarChart test={test} data={data} />}
        </Fragment>
      );
    } else if (result === "stackedBarChart") {
      return (
        <Fragment>
          {isCompleted && result && <StackedBarChart test={test} data={data} />}
        </Fragment>
      );
    }
  };

  // FORMAT THE DATA SO IT MATCHES WITH BARCHART FORMAT
  const formatResults = () => {
    let rawData = {};
    let formatedData = [];
    if (type === "true-or-false") {
      rawData = {
        name: test.topic,
        mark: 0,
        rest: 100
      };
      results &&
        questions.map(question => {
          console.log(question[results[question.id]]);
          rawData.mark += question[results[question.id]] * 10;
          rawData.rest -= question[results[question.id]] * 10;
          return rawData;
        });
      console.log(rawData);
      formatedData.push(rawData);
      setData(formatedData);
    } else if (type === "likert") {
      results &&
        questions.map(question => {
          if (!rawData[question.driver]) {
            return (rawData[question.driver] = {
              name: drivers[question.driver],
              testTotal: Number(results[question.id]),
              selfTotal: 15,
              othersTotal: 18
            });
          } else {
            return (rawData[question.driver].testTotal += Number(
              results[question.id]
            ));
          }
        });
      formatedData = Object.values(rawData);
      setData(formatedData);
    }
  };

  const onSubmit = async formValues => {
    // no need e.preventdefault as handleSubmit handles it
    await formatResults();
    setCompletion(true);
    return formValues;
  };

  return (
    <Fragment>
      <Fragment>{renderWording()}</Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Fragment>{renderHeader()}</Fragment>
          <Fragment>{renderQuestions()}</Fragment>
          <Fragment>{renderSubmitButton()}</Fragment>
        </FormGroup>
      </form>
      <Fragment>{renderResult()}</Fragment>
    </Fragment>
  );
};

// FORM NAME IS DEFINED IN FORMNAME PARENT ON EXERCISE PAGE
export default reduxForm({ form: "", validate })(LikertForm);
