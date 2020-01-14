import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import TabPanel from "../../components/tab-panel/TabPanel";
import Paper from "@material-ui/core/Grid";
import ExercisePage from "../../components/exercise-page/ExercisePage";
import Scorm from "../../scorm/Scorm";
import { Base64 } from "js-base64";

const a11yProps = index => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
};

const language = "fr";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    width: "100%",
    backgroundColor: "white"
  },
  tab: {
    "&:last-child": {
      color: "#b71b53"
    }
  },
  paper: { margin: "0", width: "100%", overflowX: "auto", padding: "20px 0" }
}));

/* MAIN COMPONENT */
const ProfilerApp = () => {
  const { skills } = window.props[language];
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [initialValues, setInitialValues] = useState({});
  const allResults = useSelector(state => state.form);

  const setScormData = () => {
    if (
      process.env.NODE_ENV === "development" ||
      window.location.href === "https://themoocagency.github.io/profiler/"
    ) {
      // STORE THE DATA IN LOCAL STORAGE IN PRODUCTION AS YOU CAN'T COMMUNICATE WITH SCORM API
      window.localStorage.setItem("initialValues", JSON.stringify(allResults));
    } else {
      Scorm.setSuspendData(Base64.encode(JSON.stringify(allResults)));
    }
  };

  useEffect(() => {
    let scormData = null;
    if (
      process.env.NODE_ENV === "development" ||
      window.location.href === "https://themoocagency.github.io/profiler/"
    ) {
      scormData = JSON.parse(window.localStorage.getItem("initialValues"));
      setInitialValues(scormData);
    } else {
      Scorm.init();
      scormData = Scorm.getSuspendData();
      if (scormData) {
        setInitialValues(JSON.parse(Base64.decode(scormData)));
      }
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabs = () => {
    return (
      <AppBar position="fixed" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#b71b53"
            }
          }}
        >
          {skills.map((skill, index) => {
            return (
              <Tab
                key={index}
                label={skill.name}
                {...a11yProps(index)}
                className={classes.tab}
              />
            );
          })}
        </Tabs>
      </AppBar>
    );
  };

  const renderPanel = () => {
    return skills.map((skill, index) => {
      return (
        <TabPanel value={value} index={index} key={index}>
          <Grid style={{ paddingTop: "40px" }}>
            <Paper className={classes.paper}>
              <ExercisePage
                skill={skill}
                skills={skills}
                parentIndex={index}
                initialValues={initialValues}
                setScormData={setScormData}
              />
            </Paper>
          </Grid>
        </TabPanel>
      );
    });
  };

  return (
    <Grid container className={classes.root} justify="center" id="app">
      <Grid item>{renderTabs()}</Grid>
      <Grid item lg={9} md={12} sm={12} xs={12}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {renderPanel()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfilerApp;
