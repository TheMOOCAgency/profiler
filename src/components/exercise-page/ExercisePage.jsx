import React, { Fragment, useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import LikertForm from "../../components/forms/likert-form/LikertForm";
import FreeField from "../../components/forms/free-field/FreeField";
import Grid from "@material-ui/core/Grid";
import { FormName } from "redux-form";
import logo from "../../assets/logo.jpeg";
import button from "../../assets/radioButton.png";
import checkedButton from "../../assets/checkedRadioButton.png";
import SubmitButton from "../forms/submit-button/SubmitButton";
// import XYChart from "../results/xy-chart/XYChart";

const ExercisePage = ({
  skills,
  skill,
  parentIndex,
  initialValues,
  setScormData,
  setLoader
}) => {
  const [isPrinted, setIsPrinted] = useState(false);
  const { topic, wording } = skills[parentIndex];

  useEffect(() => {
    if (isPrinted === true) {
      setIsPrinted(false);
      console.log("isprinted");
    }
  }, [isPrinted]);

  const renderWording = () => {
    return (
      <Grid id={`print-wording-${parentIndex}`}>
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
                  // fontStyle: "italic",
                  fontSize: "14px",
                  margin: "20px 0"
                }}
              >
                {wording}
              </Grid>
            )}
          </Fragment>
        )}
      </Grid>
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
                initialValues={
                  initialValues &&
                  initialValues[test.name] &&
                  initialValues[test.name].values
                }
                setScormData={setScormData}
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
                initialValues={
                  initialValues &&
                  initialValues[test.name] &&
                  initialValues[test.name].values
                }
                setScormData={setScormData}
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
                initialValues={
                  initialValues &&
                  initialValues[test.name] &&
                  initialValues[test.name].values
                }
                setScormData={setScormData}
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

  const printPdf = () => {
    const input = document.getElementById(`to-print${parentIndex}`);
    // CONVERT ALL SVG IN PICTURES
    // GET ALL RADIO BUTTONS INPUT IN ORDER TO GET THEIR STATUS
    let inputElem = [];
    let textElem = [...input.getElementsByClassName("MuiInputBase-multiline")];
    let buttonElem = [...input.getElementsByClassName("button-parent")];
    if (process.env.NODE_ENV === "development") {
      inputElem = [
        ...input.getElementsByClassName("PrivateSwitchBase-input-244")
      ];
    } else {
      inputElem = [...input.getElementsByClassName("jss244")];
    }
    setLoader(true);
    // GET ALL RADIO BUTTONS IN ORDER TO REPLACE THEM
    let svgElem = [...input.getElementsByClassName("radioSVG")];
    let originalTag = [];
    let originalTextArea = [];
    let originalButton = [];

    for (let i = 0; i < textElem.length; i++) {
      originalTextArea.push(textElem[i].innerHTML);
      textElem[i].innerHTML = `<div>${textElem[i].textContent}</div>`;
    }

    for (let i = 0; i < buttonElem.length; i++) {
      originalButton.push(buttonElem[i].innerHTML);
      buttonElem[i].innerHTML = `<div/>`;
    }

    for (let i = 0; i < svgElem.length; i++) {
      if (svgElem.length > 0 && inputElem[i].checked) {
        // STORE ORIGINAL HTML IN ORDER TO RE-USE IT
        originalTag.push(svgElem[i].innerHTML);
        // REPLACE ORIGINAL HTML WITH BUTTON PICTURE
        svgElem[
          i
        ].innerHTML = `<img src=${checkedButton} style={{height:'100%', width:'100%'}} ></img>`;
      } else {
        originalTag.push(svgElem[i].innerHTML);
        svgElem[
          i
        ].innerHTML = `<img src=${button} style={{height:'100%', width:'100%'}} ></img>`;
      }
    }
    let inputWidth = input.scrollWidth;
    let inputHeight = input.scrollHeight;

    // CONVERT ELEMENT TO CANVAS THEM
    html2canvas(input, {
      x: input.offsetLeft,
      y: input.offsetTop,
      width: inputWidth,
      height: inputHeight * 1.13,
      allowTaint: true
    }).then(canvas => {
      const pdf = new jsPDF("p", "pt", [inputWidth / 4, inputHeight / 4], true);
      const imgData = canvas.toDataURL("image/jpeg");
      pdf.addImage(
        imgData,
        "JPEG",
        10,
        10,
        inputWidth / 4 - 20,
        inputHeight / 4
      );

      for (let i = 0; i < originalTag.length; i++) {
        svgElem[i].innerHTML = originalTag[i];
      }

      for (let i = 0; i < originalTextArea.length; i++) {
        textElem[i].innerHTML = originalTextArea[i];
      }

      for (let i = 0; i < originalButton.length; i++) {
        buttonElem[i].innerHTML = originalButton[i];
      }

      pdf.save(`${skill.name}.pdf`);
      setLoader(false);
      setIsPrinted(true);
    });
  };

  return (
    <Grid container id={`to-print${parentIndex}`}>
      <Grid item xs={12}>
        <Fragment>{renderWording()}</Fragment>
        <Fragment>{renderTestType()}</Fragment>
        <SubmitButton onClick={() => printPdf()}>
          <Fragment>Télécharger en PDF</Fragment>
        </SubmitButton>
      </Grid>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img src={logo} alt="logo" style={{ height: "100px" }} />
        <div style={{ fontSize: "8px", marginTop: "8px" }}>
          © Association Groupe Kedge Business School, 2019
        </div>
      </div>
    </Grid>
  );
};

export default ExercisePage;
