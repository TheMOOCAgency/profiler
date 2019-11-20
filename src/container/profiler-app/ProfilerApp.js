import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import TabPanel from "../../components/tab-panel/TabPanel";
import LikertScale from "../../components/likert-scale/LikertScale";
import TrueOrFalse from "../../components/true-or-false/TrueOrFalse";
import FreeField from "../../components/free-field/FreeField";

const a11yProps = index => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    palette: {
      primary: "red",
      secondary: "red"
    }
  }
}));

/* MAIN COMPONENT */
const ProfilerApp = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabs = () => {
    return (
      <AppBar position="fixed" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {window.props.skills.map((skill, index) => {
            return <Tab key={index} label={skill.name} {...a11yProps(index)} />;
          })}
        </Tabs>
      </AppBar>
    );
  };

  const renderTestType = index =>
    window.props.skills[index].tests.map((test, index) => {
      if (test.type === "likert") {
        return (
          <LikertScale
            key={index}
            topicIndex={index + 1}
            topic={test.topic}
            questions={test.questions}
            answers={test.answers}
          />
        );
      } else if (test.type === "true-or-false") {
        return (
          <TrueOrFalse
            key={index}
            questionIndex={index + 1}
            question={test.question}
            answers={test.answers}
          />
        );
      } else if (test.type === "free-field") {
        return <FreeField key={index} questionIndex={index + 1} />;
      }
      return null;
    });

  const renderPanel = () => {
    return window.props.skills.map((skill, index) => {
      return (
        <TabPanel value={value} index={index} key={index}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "40px" }}
          >
            {renderTestType(index)}
          </Grid>
        </TabPanel>
      );
    });
  };

  return (
    <div className={classes.root}>
      {renderTabs()}
      {renderPanel()}
    </div>
  );
};

export default ProfilerApp;
