import React, { Fragment, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SubmitButton from "../submit-button/SubmitButton";
import BarChart from "../../results/bar-chart/BarChart";
import StackedBarChart from "../../results/stacked-bar-chart/StackedBarChart";
import XYChart from "../../results/xy-chart/XYChart";
import likert from "../../../assets/pictos/likert.png";
import trueOrFalse from "../../../assets/pictos/true-or-false.png";

const CustomRadio = withStyles({
  root: {
    color: "#b71b53",
    margin: `0, auto`
  },
  checked: { color: "#b71b53" }
})(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  questionLine: {
    borderBottom: "1px solid rgba(75,75,75,0.2)",
    padding: theme.spacing(2, 0)
  },
  radioBlock: {
    // opacity: props => `${0.5 + Number(props.value) / 15}`,
    width: "100px",
    "@media (max-width: 700px)": {
      width: "45px",
      margin: 0
    },
    display: "flex",
    justifyContent: "center",
    margin: 0
    // justifyContent: "center"
  },
  answerBlock: {
    width: "100px",
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "600",
    "@media (max-width: 700px)": {
      width: "100%",
      margin: "4px 0"
    }
  },
  answerIndex: {
    fontSize: "10px",
    fontWeight: "600",
    color: theme.palette.primary,
    display: "none",
    textAlign: "center",

    "@media (max-width: 700px)": {
      display: "block"
    }
  },
  buttonsLine: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    "@media (max-width: 1000px)": {
      justifyContent: "center",
      marginTop: theme.spacing(2)
    }
  },
  headerLine: {
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 1000px)": {
      justifyContent: "center",
      textAlign: "center"
    },
    "@media (max-width: 700px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      textAlign: "left"
    }
  },

  quizHeader: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    color: "#353535",
    border: "2px solid #b71b53"
  }
}));

let requiredFields = [];

// IN ORDER TO VALIDATE FORM ONLY IF ALL EXPECTED INPUT ARE CHECKED / FILLED
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
      errors[field] = "*";
    }
  });

  return errors;
};

/* BUTTON LINE */
const radioButtons = ({
  answers,
  salut,
  input,
  radioBlock,
  answerIndex,
  theme,
  meta: { error, touched },
  ...rest
}) => (
  <FormControl>
    <Grid
      container
      direction="row"
      alignItems="center"
      style={{ position: "relative" }}
    >
      <RadioGroup {...input} {...rest} row>
        {answers.map((answer, index) => {
          return (
            <div
              key={answer.value}
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <div style={{ marginRight: "-6px" }} className={answerIndex}>
                {index + 1 + ". "}
              </div>
              <FormControlLabel
                className={radioBlock}
                value={answer.value.toString()}
                control={<CustomRadio className="radioSVG" theme={theme} />}
              />
            </div>
          );
        })}
      </RadioGroup>
      <h5
        style={{
          color: "#b71b53",
          fontSize: "14px",
          margin: 0,
          // fontStyle: "italic",
          position: "absolute",
          right: "-20px"
        }}
      >
        {touched && error}
      </h5>
    </Grid>
  </FormControl>
);

/* MAIN COMPONENT */
const LikertForm = props => {
  const {
    handleSubmit,
    pristine,
    submitting,
    test,
    theme,
    setScormData,
    initialValues,
    valid,
    anyTouched
  } = props;
  const {
    questions,
    answers,
    button1,
    button2,
    type,
    result,
    name,
    drivers,
    requiredForms,
    topic,
    dataForms,
    wording,
    additionalText,
    validationError
  } = test;
  // console.log(errors);

  const [isCompleted, setCompletion] = useState(false);
  const [size, setSize] = useState({});
  const [data, setData] = useState([]);

  // REACT-REDUX WITH HOOKS, REPLACE MAPSTATETOPROPS
  const { results } = useSelector(state => ({
    results: state.form[name].values
  }));
  // const theme = useTheme();
  const {
    questionLine,
    quizHeader,
    radioBlock,
    buttonsLine,
    headerLine,
    answerBlock,
    answerIndex
  } = useStyles(theme);

  useEffect(() => {
    if (initialValues && initialValues.question0) {
      formatResults();
      setCompletion(true);
    }
  }, [initialValues]);

  useEffect(() => {
    // ADAPT SIZE WHETHER IT'S A LIKERT SCALE OR A TRUE/FALSE
    const resize = () => {
      if (type === "likert") {
        setSize({ questions: 3, blank: 1, answers: 8 });
      } else if (type === "true-or-false") {
        setSize({ questions: 7, blank: 1, answers: 4 });
      }
    };
    resize();
  }, [type]);

  const renderHeader = () => {
    return (
      <Grid container direction="row" justify="flex-end" className={quizHeader}>
        <Grid item md={size.questions} sm={false} />
        <Grid item md={size.blank} sm={false} />
        <Grid item md={size.answers} sm={12} xs={12}>
          <Grid
            container
            direction="row"
            alignItems="center"
            className={headerLine}
          >
            {answers &&
              answers.map((answer, index) => {
                return (
                  <div
                    key={answer.value}
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <div style={{ marginRight: "4px" }} className={answerIndex}>
                      {index + 1 + ". "}
                    </div>
                    <div className={answerBlock}>
                      {answer.name.toUpperCase()}
                    </div>
                  </div>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderQuestions = theme => {
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
              className={questionLine}
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
              <Grid
                item
                md={size.answers}
                sm={12}
                xs={12}
                className={buttonsLine}
              >
                <Field
                  name={question.id}
                  answers={answers}
                  theme={theme}
                  component={radioButtons}
                  radioBlock={radioBlock}
                  answerIndex={answerIndex}
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
                    position: "relative",
                    padding: "10px 0 10px 33px",
                    backgroundColor: "#b71b60",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "14px"
                  }}
                >
                  <img
                    src={likert}
                    alt="likert-logo"
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "12px",
                      height: "40%"
                    }}
                  />
                  {question.subTopic.toUpperCase()}
                  <span
                    style={{
                      fontSize: "10px",
                      marginLeft: "5px"
                    }}
                  >
                    {question.additionalText}
                  </span>
                </h4>
              </Grid>
              <Grid
                item
                sm={12}
                style={{
                  textAlign: "justify",
                  fontSize: "14px"
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
        {!isCompleted && result ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              color: "#b71b60"
            }}
          >
            {anyTouched && !valid && validationError}
            <SubmitButton disabled={pristine || submitting} role="save">
              <Fragment>{button1}</Fragment>
            </SubmitButton>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              color: "#b71b60"
            }}
          >
            {anyTouched && !valid && validationError}
            <SubmitButton role="save">
              <Fragment>{button2}</Fragment>
            </SubmitButton>
          </div>
        )}
      </Fragment>
    );
  };

  const renderResult = () => {
    if (result.type === "histogram") {
      return (
        isCompleted &&
        result && (
          <Grid style={{ marginBottom: "40px" }}>
            <Grid
              item
              sm={12}
              style={{
                margin: "0",
                fontStyle: "italic",
                padding: "10px 0",
                fontSize: "14px"
              }}
            >
              {result.interpretation}
            </Grid>
            <BarChart test={test} data={data} />
            <Grid
              item
              sm={12}
              style={{
                margin: "0",
                fontStyle: "italic",
                padding: "10px 0",
                fontSize: "14px"
              }}
            >
              {result.interpretation}
            </Grid>
          </Grid>
        )
      );
    } else if (result.type === "stackedBarChart") {
      return (
        isCompleted &&
        result && (
          <Grid style={{ marginBottom: "40px" }}>
            <Grid
              item
              sm={12}
              style={{
                margin: "0",
                fontStyle: "italic",
                padding: "10px 0",
                fontSize: "14px"
              }}
            >
              {result.interpretation}
            </Grid>
            <StackedBarChart test={test} data={data} />
          </Grid>
        )
      );
    } else if (result.type === "xyChart") {
      return (
        isCompleted &&
        result && (
          <Grid style={{ marginBottom: "40px" }}>
            <Grid
              item
              sm={12}
              style={{
                margin: "0",
                padding: "10px 0",
                fontSize: "14px"
              }}
            >
              <div style={{ textAlign: "center" }}>{result.interpretation}</div>
            </Grid>
            <XYChart test={test} data={data} />
          </Grid>
        )
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
    } else if (type === "likert" && result.type === "stackedBarChart") {
      rawData = {
        name: test.drivers.driver1,
        mark: 0,
        rest: questions.length * answers.length
      };

      questions.map(question => {
        rawData.mark += Number(results[question.id]);
        rawData.rest -= Number(results[question.id]);
        return rawData;
      });
      formatedData.push(rawData);
      setData(formatedData);
      // LIKERT - SINGLE FORM CASE
    } else if (type === "likert" && !requiredForms) {
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
      setData(formatedData);
    }
  };

  const onSubmit = async formValues => {
    // no need e.preventdefault as handleSubmit handles it
    await formatResults();
    // Scorm.setSuspendData(allResults);
    setScormData();
    setCompletion(true);
    return formValues;
  };

  return (
    <Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {topic && (
            <h4
              style={{
                margin: "0",
                position: "relative",
                padding: "10px 0 10px 33px",
                backgroundColor: "#b71b60",
                color: "white",
                borderRadius: "5px",
                fontSize: "14px"
              }}
            >
              {type === "likert" ? (
                <img
                  src={likert}
                  alt="likert-logo"
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "12px",
                    height: "40%"
                  }}
                />
              ) : (
                <img
                  src={trueOrFalse}
                  alt="true-or-false-logo"
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "12px",
                    height: "40%"
                  }}
                />
              )}
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
        </div>
        <div>
          {wording && (
            <h4
              style={{
                margin: "0",
                fontWeight: "400",
                padding: "10px 0",
                fontSize: "14px",
                textAlign: "justify"
              }}
            >
              {wording}
            </h4>
          )}
        </div>
        <Fragment>
          {!requiredForms && (
            <div style={{ marginTop: "10px" }}>{renderHeader()}</div>
          )}
        </Fragment>
        <FormGroup>
          <Fragment>{renderQuestions(theme)}</Fragment>
          <Fragment>{renderSubmitButton()}</Fragment>
        </FormGroup>
      </form>
      <Grid>{renderResult()}</Grid>
    </Grid>
  );
};

// FORM NAME IS DEFINED IN FORMNAME PARENT ON EXERCISE PAGE
export default reduxForm({
  form: "",
  enableReinitialize: true,

  validate
})(LikertForm);
