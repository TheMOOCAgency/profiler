import React, { Fragment, useState, useEffect } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import LikertForm from "../../components/forms/likert-form/LikertForm";
import FreeField from "../../components/forms/free-field/FreeField";
import Grid from "@material-ui/core/Grid";
import { FormName } from "redux-form";
import XYChart from "../results/xy-chart/XYChart";

const ExercisePage = ({ skills, skill, parentIndex }) => {
  const [initialValues, setInitialValues] = useState({});
  const { topic, wording } = skills[parentIndex];

  useEffect(() => {
    const renderInitialValues = () => {
      return skill.tests.map(test => {
        initialValues[test.name] = {};
        if (test.type === "likert") {
          test.questions.map(question => {
            if (!question.subTopic) {
              setInitialValues(prevState => ({
                ...prevState,
                [test.name]: {
                  ...prevState[test.name],
                  [question.id]: "3"
                }
              }));
            }
            return null;
          });
          // console.log(initialValues);
        } else if (test.type === "true-or-false") {
          test.questions.map(question => {
            setInitialValues(prevState => ({
              ...prevState,
              [test.name]: {
                ...prevState[test.name],
                [question.id]: "true"
              }
            }));
            return null;
          });
          console.log(initialValues);
        }
        return null;
      });
    };
    renderInitialValues();
  }, []);

  const renderWording = () => {
    return (
      <Fragment>
        {(topic || wording) && (
          <Fragment>
            {topic && (
              <h3
                style={{
                  backgroundColor: "#353535",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  margin: "0 0 10px 0",
                  fontSize: "16px"
                }}
              >
                {topic.toUpperCase()}
              </h3>
            )}
            {wording && (
              <Grid
                item
                md={7}
                sm={12}
                style={{
                  textAlign: "justify",
                  fontStyle: "italic",
                  fontSize: "14px",
                  margin: "20px 0"
                }}
              >
                {wording}
              </Grid>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  };

  const renderTestType = () => {
    return skill.tests.map((test, index) => {
      if (test.type === "likert") {
        console.log(initialValues[test.name]);
        return (
          <FormName key={index}>
            {() => (
              <LikertForm
                test={test}
                form={test.name}
                initialValues={initialValues[test.name]}
              />
            )}
          </FormName>
        );
      } else if (test.type === "true-or-false") {
        // console.log(initialValues);
        return (
          <FormName key={index}>
            {() => (
              <LikertForm
                test={test}
                form={test.name}
                initialValues={initialValues[test.name]}
              />
            )}
          </FormName>
        );
      } else if (test.type === "free-field") {
        return (
          <FormName key={index}>
            {() => (
              <FreeField
                test={test}
                form={test.name}
                // initialValues={initialValues}
              />
            )}
          </FormName>
        );
      }
      return null;
    });
  };

  // const printPdf = () => {
  //   const input = document.getElementById("to-print");

  //   html2canvas(input).then(canvas => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "pt", "a4", true);

  //     pdf.addImage(imgData, "PNG", 0, 0, 270, 270);
  //     pdf.save(`${skill.name}.pdf`);
  //   });
  // };

  const newData = { name: "style", x: 32, y: 24 };

  const tests = {
    questions: ["", "", "", "", "", "", ""]
  };

  return (
    <Fragment>
      <div id="to-print">
        <XYChart test={tests} date={newData} />
        <Grid>
          <Fragment>{renderWording()}</Fragment>
          <Fragment>{renderTestType()}</Fragment>
        </Grid>
      </div>
      {/* <button onClick={() => printPdf()}>Print</button> */}
    </Fragment>
  );
};

export default ExercisePage;
