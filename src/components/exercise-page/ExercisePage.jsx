import React, { Fragment, useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import LikertForm from "../../components/forms/likert-form/LikertForm";
import FreeField from "../../components/forms/free-field/FreeField";
import Grid from "@material-ui/core/Grid";
import { FormName } from "redux-form";
import logo from "../../assets/logo.jpeg";
import SubmitButton from "../forms/submit-button/SubmitButton";
import ScrollReveal from "scrollreveal";

// import XYChart from "../results/xy-chart/XYChart";

const ExercisePage = ({
  skills,
  skill,
  parentIndex,
  initialValues,
  setScormData
}) => {
  const { topic, wording } = skills[parentIndex];

  // CALL SCROLL REVEAL ANYTIME PARENT INDEX IS MUTATED
  const prevIndexRef = useRef();

  useEffect(() => {
    prevIndexRef.current = parentIndex;
  }, [parentIndex]);

  const prevIndex = prevIndexRef.current;

  if (prevIndex !== parentIndex) {
    ScrollReveal().reveal(".smooth-reveal", {
      delay: 1000,
      useDelay: "onload",
      distance: "20px",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      scale: 0.8,
      interval: 0.5
    });
  }

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
                skills={skills}
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

  const printPdf = () => {
    setScormData();
    // GET EXERCISE PAGE HTML CONTENT
    const inputToClone = document.getElementById(`to-print${parentIndex}`);

    window.scrollTo(0, 0);

    // CLONE HTML IN ORDER TO APPLY TEXTAREA CHANGES WITHOUT MESSING WITH REACT RENDER
    const input = document
      .getElementById("clone")
      .appendChild(inputToClone.cloneNode(true));

    // GET TEXTAREA TO MODIFY AND BUTTONS TO REMOVE FROM THE PRINT
    let textsElem = [...input.getElementsByClassName("MuiInputBase-multiline")];
    let buttonsElem = [...input.getElementsByClassName("button-parent")];

    // REPLACE TEXTAREAS BY REGULAR DIV SO IT APPEARS ON THE PRINTSs
    for (let i = 0; i < textsElem.length; i++) {
      textsElem[
        i
      ].innerHTML = `<div contenteditable="true" style=text-align:justify;white-space:pre-wrap; >${textsElem[i].textContent}</div>`;
    }

    // REMOVE SUBMIT BUTTONS FROM HTML
    for (let i = 0; i < buttonsElem.length; i++) {
      buttonsElem[i].innerHTML = `<div/>`;
    }
    // FORCE SVG WIDTH SO IT'S PRINTED
    const svgElements = document.body.querySelectorAll("svg");
    svgElements.forEach(function(item) {
      item.setAttribute("width", item.getBoundingClientRect().width);
      item.style.width = null;
    });

    let inputWidth = 1000 / 4;
    let inputHeight = input.offsetHeight / 4;

    console.log(inputHeight);

    // CONVERT HTML TO PNG
    html2canvas(input, {
      x: input.offsetLeft,
      y: input.offsetTop,
      width: inputWidth * 4,
      height: inputHeight * 4 * 1.1
      // allowTaint: true
    }).then(canvas => {
      let pdf = null;
      // IF WIDTH IS BIGGER THAN HEIGHT, JSPDF WONT UNDERSTAND IF YOU REQUIRE A PORTRAIT
      if (inputWidth <= inputHeight) {
        pdf = new jsPDF("p", "pt", [inputWidth * 2, inputHeight * 2], true);
      } else {
        pdf = new jsPDF("l", "pt", [inputWidth * 2, inputHeight * 2], true);
      }
      const imgData = canvas.toDataURL("image/jpeg");
      pdf.addImage(
        imgData,
        "JPEG",
        10,
        10,
        inputWidth * 2 - 20,
        inputHeight * 2
      );

      // MAKE CLONE DIV EMPTY
      input.innerHTML = "<div/>";
      pdf.save(`${skill.name}.pdf`);
    });
  };

  return (
    <Grid
      container
      style={{ position: "relative" }}
      id={`to-print${parentIndex}`}
      className="smooth-reveal"
    >
      <Grid item xs={12}>
        <Grid item xs={12}>
          {renderWording()}
        </Grid>
        <Grid item xs={12}>
          {renderTestType()}
        </Grid>
        <SubmitButton onClick={() => printPdf()} role="download">
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
