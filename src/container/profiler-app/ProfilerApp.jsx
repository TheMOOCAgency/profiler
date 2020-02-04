import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import TabPanel from "../../components/tab-panel/TabPanel";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import ExercisePage from "../../components/exercise-page/ExercisePage";
import Scorm from "../../scorm/Scorm";
import { Base64 } from "js-base64";
import WelcomePage from "../../components/welcome-page/WelcomePage";

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
  paper: {
    margin: "0",
    width: "100%",
    padding: "20px",
    "@media (max-width: 700px)": {
      padding: "0px",
      boxShadow: "none"
    }
  }
}));

/* MAIN COMPONENT */
const ProfilerApp = () => {
  const { skills } = window.props[language];
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [initialValues, setInitialValues] = useState({});
  const [hasStarted, setHasStarted] = useState();
  const [progressValue, setProgressValue] = useState(value);
  const [isLoading, setLoader] = useState(true);
  // const [isFinished, setFinish] = useState(false);
  const allResults = useSelector(state => state.form);

  const setScormData = () => {
    let values = {};
    Object.keys(allResults).map(key => {
      values[key] = {};
      return (values[key].values = allResults[key].values);
    });
    let dataToSuspend = {
      status: true,
      index: value,
      results: values
    };
    if (
      process.env.NODE_ENV === "development" ||
      window.location.href === "https://themoocagency.github.io/profiler/"
    ) {
      // STORE THE DATA IN LOCAL STORAGE IN PRODUCTION AS YOU CAN'T COMMUNICATE WITH SCORM API
      window.localStorage.setItem(
        "initialValues",
        JSON.stringify(dataToSuspend)
      );
    } else {
      Scorm.setSuspendData(Base64.encode(JSON.stringify(dataToSuspend)));
    }
  };

  const startCourse = async () => {
    await setHasStarted(true);
  };

  useEffect(() => {
    // console.log(
    //   Base64.encode(window.localStorage.getItem("initialValues")).length
    // );
    let scormData = null;
    if (
      process.env.NODE_ENV === "development" ||
      window.location.href === "https://themoocagency.github.io/profiler/"
    ) {
      scormData = JSON.parse(window.localStorage.getItem("initialValues"));
      if (scormData) {
        setInitialValues(scormData.results);
        setValue(Number(scormData.index));
        setProgressValue(Number(scormData.index));
        setHasStarted(scormData.status);
      }
    } else {
      Scorm.init();
      scormData = Scorm.getSuspendData();
      if (scormData) {
        setInitialValues(JSON.parse(Base64.decode(scormData)).results);
        setValue(JSON.parse(Base64.decode(scormData)).index);
        setProgressValue(JSON.parse(Base64.decode(scormData)).index);
        setHasStarted(JSON.parse(Base64.decode(scormData)).status);
        Scorm.setSuspendData(scormData);
      }
    }
    setLoader(false);
  }, []);

  const handleChange = (event, newValue) => {
    // GO BACKWARD ONCE AT BLOCK NOTES
    if (newValue === 0) {
      setValue(0);
    } else if (value === 7 && newValue - 1 <= progressValue) {
      setValue(newValue - 1);
    } else if (value === 7 && newValue - 1 > progressValue && newValue !== 8) {
      setValue(progressValue);
      // ALLOW GOING TO BLOCK NOTES
    } else if (newValue === 8 && progressValue < 7) {
      console.log(progressValue, value);
      setValue(newValue - 1);
      // GO FORWARD ONLY IF PROGRESSION IS VALID
    } else if (value < newValue - 1) {
      let isAllowedToContinue = [];
      skills[newValue - 2].tests.map(test => {
        test.questions.map(question => {
          // CHECK IF EXERCISE FORM HAS ERRORS, IF NOT, YOU CAN SWITCH TO NEXT EXERCISE
          if (
            allResults[test.name]["syncErrors"][question.id] === "" ||
            allResults[test.name]["syncErrors"][question.id] === "*"
          ) {
            isAllowedToContinue.push(false);
          } else {
            isAllowedToContinue.push(true);
          }
        });
      });
      // IF NO COMPLETION ERROR, YOU CAN GO FORWARD
      if (!isAllowedToContinue.includes(false)) {
        setValue(newValue - 1);
        // TO AVOID PROGRESS VALUE TO BE LOWER THAN IT IS WHEN GOING A FEW TABS BACKWARD
        if (progressValue < newValue - 1) {
          setProgressValue(newValue - 1);
          if (progressValue === 7) {
            console.log("End");
            Scorm.terminate();
          }
        }

        // SET CMI COMPLETION IF EVERYTHING IS COMPLETED
      }
      // GO BACKWARD
    } else if (value > newValue - 1) {
      setValue(newValue - 1);
    }
  };

  const goToStartPage = () => {
    console.log(value);
    // AVOID NO RERENDER BUG WHEN GETTING BACK TO START PAGE
    let scormData = null;
    if (
      process.env.NODE_ENV === "development" ||
      window.location.href === "https://themoocagency.github.io/profiler/"
    ) {
      scormData = JSON.parse(window.localStorage.getItem("initialValues"));
      if (scormData) {
        setInitialValues(scormData.results);
        setValue(Number(scormData.index));
        setHasStarted(scormData.status);
      }
    } else {
      Scorm.init();
      scormData = Scorm.getSuspendData();
      if (scormData) {
        setInitialValues(JSON.parse(Base64.decode(scormData)).results);
        setValue(JSON.parse(Base64.decode(scormData)).index);
        setHasStarted(JSON.parse(Base64.decode(scormData)).status);
        Scorm.setSuspendData(scormData);
      }
    }
    setHasStarted(false);
  };

  const renderTabs = () => {
    return (
      <AppBar position="fixed" color="default">
        <Tabs
          value={value + 1}
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
          <Tab label="ACCUEIL" onClick={() => goToStartPage()} />
          {skills.map((skill, index) => {
            return (
              <Tooltip
                title={
                  index > progressValue && index !== 7
                    ? "Veillez à bien compléter l'ensemble des exercices avant d'accéder à l'onglet suivant"
                    : ""
                }
                aria-label="warning"
              >
                <Tab
                  key={index}
                  label={skill.name}
                  {...a11yProps(index + 1)}
                  className={classes.tab}
                />
              </Tooltip>
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
                setLoader={setLoader}
              />
            </Paper>
          </Grid>
        </TabPanel>
      );
    });
  };
  // COMPONENT RENDER
  if (isLoading) {
    return (
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          padding: "20px"
        }}
      >
        <CircularProgress size={300} />
      </Grid>
    );
  } else {
    if (hasStarted) {
      return (
        <Grid container className={classes.root} justify="center" id="app">
          <Grid item>{renderTabs()}</Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {renderPanel()}
            </Grid>
            {/* <div id="blank" style={{ visibility: "hidden" }} /> */}
            <Grid
              // THE IDEA IS TO CLONE THE HTML IN CONTENT IN THIS DIV IN ORDER TO OPERATE CHANGES FOR PDF CONVERSION WITHOUT MESSING WITH REAL CONTENT
              id="clone"
              style={{ width: "1000px" }}
            ></Grid>
          </Grid>
        </Grid>
      );
    }
    // WELCOME PAGE
    return <WelcomePage startCourse={startCourse} value={value} />;
  }
};

export default ProfilerApp;
