import React, { Fragment } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import LikertForm from "../../components/forms/likert-form/LikertForm";
import FreeField from "../../components/forms/free-field/FreeField";
// import MultiInputBarChart from "../../components/results/multi-input-bar-chart/MultiInputBarChart";
import Grid from "@material-ui/core/Grid";
import { FormName } from "redux-form";

const ExercisePage = ({ skills, skill, parentIndex }) => {
  const { topic, wording } = skills[parentIndex];

  // let initialValues = {
  //   question0: "3"
  // };

  const renderTestType = index =>
    skill.tests.map((test, index) => {
      if (test.type === "likert") {
        return (
          <FormName key={index}>
            {() => (
              <LikertForm
                test={test}
                form={test.name}
                // initialValues={initialValues}
              />
            )}
          </FormName>
        );
      } else if (test.type === "true-or-false") {
        return (
          <FormName key={index}>
            {() => (
              <LikertForm
                test={test}
                form={test.name}
                // initialValues={initialValues}
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

      // else if (test.type === "multiple-source-result") {
      //   return (
      //     <MultiInputBarChart
      //       key={index}
      //       test={test}
      //       form={test.name}
      //       tests={skill.tests}
      //     />
      //   );
      // }
    });

  // const printPdf = () => {
  //   const input = document.getElementById("to-print");

  //   html2canvas(input).then(canvas => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "pt", "a4", true);

  //     pdf.addImage(imgData, "PNG", 0, 0, 270, 270);
  //     pdf.save(`${skill.name}.pdf`);
  //   });
  // };

  return (
    <Fragment>
      <div id="to-print">
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
        <Fragment>{renderTestType()}</Fragment>
      </div>
      {/* <button onClick={() => printPdf()}>Print</button> */}
    </Fragment>
  );
};

export default ExercisePage;
