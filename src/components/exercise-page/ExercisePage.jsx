import React, { Fragment, useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import LikertForm from "../../components/forms/likert-form/LikertForm";
import FreeField from "../../components/forms/free-field/FreeField";
import Grid from "@material-ui/core/Grid";
import { FormName } from "redux-form";
import logo from "../../assets/logo.jpeg";
import SubmitButton from "../forms/submit-button/SubmitButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import ScrollReveal from "scrollreveal";

// import XYChart from "../results/xy-chart/XYChart";

const ExercisePage = ({
  skills,
  skill,
  parentIndex,
  initialValues,
  setScormData
}) => {
  const [isPrinted, setIsPrinted] = useState(true);

  const { topic, wording } = skills[parentIndex];

  // useEffect(() => {
  //   if (isPrinted === true) {
  //     setIsPrinted(false);
  //   }
  // }, [isPrinted]);

  useEffect(() => {
    ScrollReveal().reveal(".reveal-slow", {
      delay: 1000,
      useDelay: "onload",
      distance: "20px",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      scale: 0.8,
      interval: 0.5
    });
    ScrollReveal().reveal(".reveal", {
      delay: 500,
      useDelay: "onload",
      distance: "20px",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      scale: 0.8,
      interval: 0.5
    });
  });

  const renderWording = () => {
    return (
      <Grid id={`print-wording-${parentIndex}`} className="reveal">
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

  const printPdf = () => {
    setScormData();
    const inputToClone = document.getElementById(`to-print${parentIndex}`);
    setIsPrinted(false);
    window.scrollTo(0, 0);
    const input = document
      .getElementById("clone")
      .appendChild(inputToClone.cloneNode(true));
    // CONVERT ALL SVG IN PICTURES
    // GET ALL RADIO BUTTONS INPUT IN ORDER TO GET THEIR STATUS
    let textsElem = [...input.getElementsByClassName("MuiInputBase-multiline")];
    let buttonsElem = [...input.getElementsByClassName("button-parent")];
    let originalTextAreas = [];
    let originalButtons = [];

    for (let i = 0; i < textsElem.length; i++) {
      originalTextAreas.push(textsElem[i].innerHTML);
      textsElem[
        i
      ].innerHTML = `<div contenteditable="true">${textsElem[i].textContent}</div>`;
    }

    for (let i = 0; i < buttonsElem.length; i++) {
      originalButtons.push(buttonsElem[i].innerHTML);
      buttonsElem[i].innerHTML = `<div/>`;
    }

    const svgElements = document.body.querySelectorAll("svg");
    svgElements.forEach(function(item) {
      item.setAttribute("width", item.getBoundingClientRect().width);
      item.style.width = null;
    });

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

      for (let i = 0; i < originalTextAreas.length; i++) {
        textsElem[i].innerHTML = originalTextAreas[i];
      }

      for (let i = 0; i < originalButtons.length; i++) {
        buttonsElem[i].innerHTML = originalButtons[i];
      }

      input.innerHTML = "<div/>";
      pdf.save(`${skill.name}.pdf`);
      setIsPrinted(true);
    });
  };
  // if (!isPrinted) {
  //   return (
  //     <Grid
  //       container
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         width: "100%",
  //         height: "100%",
  //         padding: "20px"
  //       }}
  //     >
  //       <CircularProgress size={300} />
  //     </Grid>
  //   );
  // }
  return (
    <Grid
      container
      id={`to-print${parentIndex}`}
      style={{ position: "relative" }}
    >
      {!isPrinted && (
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: document.getElementById(`to-print${parentIndex}`)
              .scrollWidth,
            height: "100vh",
            backgroundColor: "white",
            zIndex: 1000
          }}
        >
          <CircularProgress id="circular-loader" size={300} />
        </Grid>
      )}
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
