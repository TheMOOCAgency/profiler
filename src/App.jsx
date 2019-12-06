import React from "react";
import ProfilerApp from "./container/profiler-app/ProfilerApp";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
        <ProfilerApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
