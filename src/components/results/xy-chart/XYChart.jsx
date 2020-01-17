import React, { useEffect, useState } from "react";
import "./xy-chart.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles(theme => ({
//   questionLine: {
//     borderBottom: "1px solid rgba(75,75,75,0.2)",
//     padding: "20px 0"
//   }
// }));

const XYChart = ({ test, data }) => {
  // const classes = useStyles();
  const { result } = test;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [testResult, setTestResult] = useState(0);

  useEffect(() => {
    setX(data[0].testTotal / 9);
    setY(data[1].testTotal / 9);
    const setResult = () => {
      if (x === 3 && y === 3) {
        setTestResult(0);
      } else if (x < 3 && y < 3) {
        setTestResult(1);
      } else if (x < 3 && y > 3) {
        setTestResult(2);
      } else if (x > 3 && y < 3) {
        setTestResult(3);
      } else if (x > 3 && y > 3) {
        setTestResult(4);
      }
    };
    setResult();
  }, [x, y, data]);

  return (
    <div className="xy-chart">
      <div className="container">
        {result.score.map((category, index) => {
          return (
            <div
              key={index}
              className={`result result-${index} ${
                testResult === index ? "is-result" : "is-not-result"
              }`}
              onClick={() => console.log(x, y)}
            >
              {category.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default XYChart;
