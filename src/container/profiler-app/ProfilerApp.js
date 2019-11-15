import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import TabPanel from "../../components/tab-panel/TabPanel";
import LikertScale from "../../components/likert-scale/LikertScale";

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
    backgroundColor: theme.palette.background.paper
  }
}));

/* MAIN COMPONENT */
const ProfilerApp = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const renderTabs = () => {
    return (
      <AppBar position="static" color="default">
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
        return <LikertScale key={index} />;
      }
      return null;
    });

  const renderPanel = () => {
    return window.props.skills.map((skill, index) => {
      return (
        <TabPanel value={value} index={index} key={index}>
          <Grid container alignItems="center" justify="center">
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
