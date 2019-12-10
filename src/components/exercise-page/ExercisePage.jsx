import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
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
  // const [initialValues, setInitialValues] = useState({});
  const { topic, wording } = skills[parentIndex];
  const formResults = useSelector(state => state.form);
  console.log(formResults, "results");

  useEffect(() => {
    Scorm.init();
    console.log(Scorm.init(), "ggg");
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
                // initialValues={initialValues[test.name]}
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
                // initialValues={initialValues[test.name]}
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

  const printPdf = () => {
    const input = document.getElementById("to-print");

    html2canvas(input).then(canvas => {
      document.body.appendChild(canvas);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4", true);
      let width = input.clientWidth * 0.5;
      let height = input.clientHeight * 0.5;
      //  pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 45, -1380, width, height);
      pdf.save(`${skill.name}.pdf`);
    });
  };

  // const newData = { name: "style", x: 32, y: 24 };

  // const tests = {
  //   questions: ["", "", "", "", "", "", ""]
  // };

  return (
    <Fragment>
      <div id="to-print">
        {/* <XYChart test={tests} date={newData} /> */}
        <Grid>
          <Fragment>{renderWording()}</Fragment>
          <Fragment>{renderTestType()}</Fragment>
        </Grid>
      </div>
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
