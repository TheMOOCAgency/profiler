import React, { Fragment, useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { makeStyles } from "@material-ui/core/styles";
import LikertForm from "../../components/forms/likert-form/LikertForm";
import FreeField from "../../components/forms/free-field/FreeField";
import Grid from "@material-ui/core/Grid";
import { FormName } from "redux-form";
import logo from "../../assets/logo.jpeg";
import SubmitButton from "../forms/submit-button/SubmitButton";
import ScrollReveal from "scrollreveal";
import checkedButton from "../../assets/checkedRadioButton.png";
import button from "../../assets/radioButton.png";

const useStyles = makeStyles(theme => ({
  dlButton: {
    "@media (max-width: 700px)": {
      display: "none"
    }
  }
}));

const ExercisePage = ({
  skills,
  skill,
  parentIndex,
  initialValues,
  setScormData
}) => {
  const { topic, wording } = skills[parentIndex];
  const classes = useStyles();

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

    let inputElem = [...input.getElementsByTagName("INPUT")];
    let svgElem = [...input.getElementsByClassName("radioSVG")];
    let textsElem = [...input.getElementsByClassName("MuiInputBase-multiline")];
    let buttonsElem = [...input.getElementsByClassName("button-parent")];
    let iconsElem = [...input.getElementsByClassName("fas")];

    for (let i = 0; i < svgElem.length; i++) {
      console.log(inputElem[i].checked);
      if (inputElem[i] && inputElem[i].checked) {
        // REPLACE ORIGINAL HTML WITH BUTTON PICTURE
        svgElem[
          i
        ].innerHTML = `<img src=${checkedButton} style={{height:'100%', width:'100%'}} ></img>`;
      } else {
        svgElem[
          i
        ].innerHTML = `<img src=${button} style={{height:'100%', width:'100%'}} ></img>`;
      }
    }

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

    // REMOVE PICTOS FROM TITLES AS THEY DONT SHOW UP IN CHROME WHILE GENERATING PDF
    for (let i = 0; i < iconsElem.length; i++) {
      iconsElem[i].outerHTML = `<div/>`;
    }

    // FORCE SVG WIDTH SO IT'S PRINTED, WORKS WITH CHROME BUT NOT FIREFOX
    // const svgElements = document.body.querySelectorAll("svg");
    // svgElements.forEach(function(item) {
    //   item.setAttribute("width", item.getBoundingClientRect().width);
    //   item.setAttribute("heigth", item.getBoundingClientRect().heigth);
    //   item.style.width = null;
    //   item.style.height = null;
    // });

    let inputWidth = 1000;
    let inputHeight = input.offsetHeight;

    // CONVERT HTML TO PNG
    html2canvas(input, {
      x: input.offsetLeft,
      y: input.offsetTop,
      width: inputWidth,
      height: inputHeight * 1.1
      // allowTaint: true
    }).then(canvas => {
      let pdf = null;
      // IF WIDTH IS BIGGER THAN HEIGHT, JSPDF WONT UNDERSTAND IF YOU REQUIRE A PORTRAIT
      if (inputWidth <= inputHeight) {
        pdf = new jsPDF("p", "pt", [inputWidth, inputHeight], true);
      } else {
        pdf = new jsPDF("l", "pt", [inputWidth, inputHeight], true);
      }
      const imgData = canvas.toDataURL("image/jpeg");
      pdf.addImage(imgData, "JPEG", 10, 10, inputWidth - 20, inputHeight);

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
        <Grid className={classes.dlButton}>
          <SubmitButton onClick={() => printPdf()} role="download">
            <Fragment>Télécharger en PDF</Fragment>
          </SubmitButton>
        </Grid>
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
