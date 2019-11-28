import React, { Fragment } from "react";
import LikertForm from "../../components/forms/likert-form/LikertForm";
import FreeField from "../../components/forms/free-field/FreeField";
import Grid from "@material-ui/core/Grid";
import { FormName } from "redux-form";

const ExercisePage = ({ skills, skill, parentIndex }) => {
  const { topic, wording } = skills[parentIndex];

  const renderTestType = index =>
    skill.tests.map((test, index) => {
      if (test.type === "likert") {
        return (
          <FormName key={index}>
            {() => <LikertForm test={test} form={test.name} />}
          </FormName>
        );
      } else if (test.type === "true-or-false") {
        return (
          <FormName key={index}>
            {() => <LikertForm test={test} form={test.name} />}
          </FormName>
        );
      } else if (test.type === "free-field") {
        return (
          <FormName key={index}>
            {() => <FreeField test={test} form={test.name} />}
          </FormName>
        );
      }
      return null;
    });
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default ExercisePage;
