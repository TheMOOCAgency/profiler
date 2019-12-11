import React, { Fragment, useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import LikertForm from "../../components/forms/likert-form/LikertForm";
import FreeField from "../../components/forms/free-field/FreeField";
import Grid from "@material-ui/core/Grid";
import { FormName } from "redux-form";
import logo from "../../assets/logo.jpeg";
import Scorm from "../../scorm/Scorm";
// import XYChart from "../results/xy-chart/XYChart";

const ExercisePage = ({ skills, skill, parentIndex }) => {
  const [initialValues, setInitialValues] = useState({});
  const { topic, wording } = skills[parentIndex];

  useEffect(() => {
    Scorm.init();
    const scormData = Scorm.getSuspendData();
    console.log(scormData, "scormData");
    setInitialValues(scormData);
    // const renderInitialValues = () => {
    //   return skill.tests.map(test => {
    //     initialValues[test.name] = {};
    //     if (test.type === "likert") {
    //       test.questions.map(question => {
    //         if (!question.subTopic) {
    //           setInitialValues(prevState => ({
    //             ...prevState,
    //             [test.name]: {
    //               ...prevState[test.name],
    //               [question.id]: "3"
    //             }
    //           }));
    //         }
    //         return null;
    //       });
    //       // console.log(initialValues);
    //     } else if (test.type === "true-or-false") {
    //       test.questions.map(question => {
    //         setInitialValues(prevState => ({
    //           ...prevState,
    //           [test.name]: {
    //             ...prevState[test.name],
    //             [question.id]: "true"
    //           }
    //         }));
    //         return null;
    //       });
    //     }
    //     return null;
    //   });
    // };
    // renderInitialValues();
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
                md={12}
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

  // const newData = { name: "style", x: 32, y: 24 };

  // const tests = {
  //   questions: ["", "", "", "", "", "", ""]
  // };

  // const printPdf = () => {
  //   const input = document.getElementById("to-print");
  //   let inputWidth = input.clientWidth + 1000;
  //   let inputHeight = input.clientHeight + 1000;
  //   const pdf = new jsPDF("l", "pt", "a4", true);
  //   html2canvas(input, {
  //     x: 0,
  //     y: 0,
  //     width: inputWidth,
  //     height: inputHeight
  //   }).then(canvas => {
  //     const imgData = canvas.toDataURL("image/png");

  //     pdf.addImage(imgData, "PNG", -40, 0, inputWidth * 0.5, inputHeight * 0.5);
  //     pdf.addPage("l", "pt", "a4", true);

  //     pdf.save(`${skill.name}.pdf`);
  //   });
  // };

  const printPdf = () => {
    let position_y = 20;
    let position_x = 15;
    const input = document.getElementsByClassName("questions-block");
    console.log(input[0].clientWidth, ":Efefefe");
    const pdf = new jsPDF("l", "pt", "a4", true);

    for (let i = 0; i < input.length; i++) {
      let inputWidth = input[0].clientWidth + 1000;
      let inputHeight = input[0].clientHeight;

      html2canvas(input[0], {
        x: 0,
        y: 0,
        width: inputWidth,
        height: inputHeight
      }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");

        pdf.addImage(
          imgData,
          "PNG",
          position_x,
          position_y,
          inputWidth * 0.5,
          inputHeight * 0.5
        );
        position_y += inputHeight;
        position_x += 0;
      });
      pdf.addPage("l", "pt", "a4", true);
    }

    pdf.save(`${skill.name}.pdf`);
  };

  return (
    <Fragment>
      <Grid id="to-print">
        <Fragment>{renderWording()}</Fragment>
        <Fragment>{renderTestType()}</Fragment>
      </Grid>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        onClick={() => printPdf()}
      >
        <img src={logo} alt="logo" style={{ height: "100px" }} />
        <div style={{ fontSize: "8px", marginTop: "8px" }}>
          © Association Groupe Kedge Business School, 2019
        </div>
      </div>
    </Fragment>
  );
};

export default ExercisePage;
