import React, { useEffect, useState } from "react";
import ProfilerApp from "./container/profiler-app/ProfilerApp";
import Scorm from "./scorm/Scorm";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Base64 } from "js-base64";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b71b53" },
    secondary: { main: "#353535" },
    chart: {
      0: "#b71b53",
      1: "#353535",
      2: "#949b9f"
    },
    text: { primary: "#353535" }
  },
  spacing: factor => [0, 4, 8, 16, 32][factor],
  breakpoints: {
    xs: "0",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px"
  },
  fontSizes: {
    small: 14,
    medium: 16,
    large: 18,

    h5: {
      sm: 12,
      md: 14,
      lg: 16
    },
    h4: {
      sm: 16,
      md: 18,
      lg: 22
    },
    h3: {
      sm: 19,
      md: 22,
      lg: 28
    },
    h2: {
      sm: 20,
      md: 22,
      lg: 24
    },
    h1: {
      sm: 24,
      md: 26,
      lg: 30
    }
  }
});

const App = () => {
  const [isLoading, setLoading] = useState(true);
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
      // console.log(JSON.parse(Base64.decode(Scorm.getSuspendData())), "data");
    }
  };

  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" ||
      window.location.href === "https://themoocagency.github.io/profiler/"
    ) {
      let scormData = JSON.parse(window.localStorage.getItem("initialValues"));
      setInitialValues(scormData);
      setLoading(false);
    } else {
      Scorm.init();
      let scormData = Scorm.getSuspendData();
      console.log(scormData, "dataaa");
      if (scormData !== undefined) {
        console.log("will be launched");
        setInitialValues(JSON.parse(Base64.decode(scormData)));
        console.log("is launched");
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  if (!isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100vw"
          }}
        >
          <ProfilerApp
            setScormData={setScormData}
            initialValues={initialValues}
          />
        </div>
      </ThemeProvider>
    );
  }
  return null;
};

export default App;
