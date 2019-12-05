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

const validate = (formValues, props) => {
  const errors = {};
  const { questions, requiredForms } = props.test;
  let findForm = null;
  if (requiredForms) {
    questions.map(question => {
      if (!question.subTopic) {
        findForm = requiredForms.find(form => form.id === question.form.id);
      }
      if (requiredFields.indexOf(question.id) === -1 && findForm) {
        requiredFields.push(question.id);
      }
      findForm = null;
      return requiredFields;
    });
  } else {
    questions.map(async question => {
      if (requiredFields.indexOf(question.id) === -1) {
        requiredFields.push(question.id);
      }
      return requiredFields;
    });
  }

  requiredFields.forEach(field => {
    if (!formValues[field]) {
      errors[field] = "Champ requis";
    }
  });

  return errors;
};

/* BUTTON LINE */
const radioButtons = ({
  answers,
  salut,
  input,
  meta: { error, touched },
  ...rest
}) => (
  <FormControl>
    <Grid container direction="row" alignItems="center">
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
      <h5
        style={{
          color: "#353535",
          fontSize: "12px",
          margin: 0,
          fontStyle: "italic",
          opacity: "0.6"
        }}
      >
        {touched && error}
      </h5>
    </Grid>
  </FormControl>
);

/* MAIN COMPONENT */
const LikertForm = ({ handleSubmit, pristine, submitting, test }) => {
  const {
    questions,
    answers,
    button,
    type,
    result,
    name,
    drivers,
    requiredForms,
    topic,
    dataForms
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
        setSize({ questions: 4, blank: 1, answers: 7 });
      } else if (type === "true-or-false") {
        setSize({ questions: 7, blank: 1, answers: 4 });
      }
    };
    resize();
  }, [type]);

  const renderHeader = () => {
    return (
      <Grid
        container
        direction="row"
        justify="flex-end"
        style={{
          borderRadius: "5px",
          padding: "10px",
          color: "#353535",
          border: "2px solid #b71b53"
        }}
      >
        <Grid item md={size.questions} sm={false} />
        <Grid item md={size.blank} sm={false} />
        <Grid
          item
          md={size.answers}
          sm={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Grid container direction="row" alignItems="center">
            {answers &&
              answers.map(answer => {
                return (
                  <div
                    key={answer.value}
                    style={{
                      width: "100px",
                      fontSize: "12px",
                      textAlign: "center",
                      fontWeight: "600"
                    }}
                  >
                    {answer.name.toUpperCase()}
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
      questions.map(question => {
        if (!question.subTopic) {
          return (
            <Grid
              key={question.id}
              container
              direction="row"
              alignItems="center"
              justify="space-between"
              className={classes.questionLine}
            >
              <Grid
                item
                md={size.questions}
                sm={12}
                style={{ fontSize: "14px" }}
              >
                {question.text}
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
          );
        } else {
          return (
            <Grid
              container
              direction="column"
              key={question.subTopic}
              style={{
                color: "#353535",
                margin: "30px 0 20px 0"
              }}
            >
              <Grid item sm={12}>
                <h4
                  style={{
                    margin: "0 0 10px 0",
                    fontStyle: "italic",
                    padding: "10px",
                    backgroundColor: "#b71b60",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "14px"
                  }}
                >
                  {question.subTopic.toUpperCase()}
                </h4>
              </Grid>
              <Grid
                item
                md={7}
                sm={12}
                style={{
                  textAlign: "justify",
                  fontStyle: "italic",
                  fontSize: "14px",
                  paddingLeft: "10px"
                }}
              >
                {question.wording}
              </Grid>
              <Grid item sm={12}>
                {renderHeader()}
              </Grid>
            </Grid>
          );
        }
      })
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
          <Grid
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
    // TRUE OR FALSE CASE
    if (type === "true-or-false") {
      rawData = {
        name: test.topic,
        mark: 0,
        rest: 100
      };
      questions.map(question => {
        rawData.mark += question[results[question.id]] * 10;
        rawData.rest -= question[results[question.id]] * 10;
        return rawData;
      });
      formatedData.push(rawData);
      setData(formatedData);
      // LIKERT - SINGLE FORM CASE - STACKED BAR
    } else if (type === "likert" && result === "stackedBarChart") {
      rawData = {
        name: test.drivers.driver1,
        mark: 0,
        rest: questions.length * answers.length
      };

      questions.map(question => {
        console.log(question[results[question.id]]);
        rawData.mark += Number(results[question.id]);
        rawData.rest -= Number(results[question.id]);
        return rawData;
      });
      formatedData.push(rawData);
      console.log(formatedData);
      setData(formatedData);
      // LIKERT - SINGLE FORM CASE
    } else if (type === "likert" && !requiredForms) {
      console.log("ojkfoewjfk");
      questions.map(question => {
        if (!rawData[question.driver]) {
          return (rawData[question.driver] = {
            name: drivers[question.driver],
            testTotal: Number(results[question.id])
          });
        } else {
          return (rawData[question.driver].testTotal += Number(
            results[question.id]
          ));
        }
      });
      formatedData = Object.values(rawData);
      setData(formatedData);
      // LIKERT - MULTIPLE FORM CASE
    } else if (type === "likert" && dataForms) {
      dataForms.map(form => {
        return questions.map(question => {
          if (!question.subTopic) {
            if (!rawData[question.driver]) {
              return (rawData[question.driver] = {
                name: drivers[question.driver],
                [question.form.id]:
                  Number(results[question.id]) * Number(question.form.coef)
              });
            } else {
              if (!rawData[question.driver][question.form.id]) {
                return (rawData[question.driver][question.form.id] =
                  Number(results[question.id]) * Number(question.form.coef));
              } else {
                return (rawData[question.driver][question.form.id] +=
                  Number(results[question.id]) * Number(question.form.coef));
              }
            }
          }
          return rawData;
        });
      });

      formatedData = Object.values(rawData);
      console.log(formatedData);
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
    <Grid style={{ marginBottom: "30px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fragment>
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
        </Fragment>
        <Fragment>
          {!requiredForms && (
            <div style={{ marginTop: "10px" }}>{renderHeader()}</div>
          )}
        </Fragment>
        <FormGroup>
          <Fragment>{renderQuestions()}</Fragment>
          <Fragment>{renderSubmitButton()}</Fragment>
        </FormGroup>
      </form>
      <Fragment>{renderResult()}</Fragment>
    </Grid>
  );
};

// FORM NAME IS DEFINED IN FORMNAME PARENT ON EXERCISE PAGE
export default reduxForm({ form: "", enableReinitialize: true, validate })(
  LikertForm
);
