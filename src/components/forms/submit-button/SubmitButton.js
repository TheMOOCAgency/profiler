import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px 0 50px 0",
    backgroundColor: "#353535",
    width: "300px",
    color: "white",
    border: "none",
    "&:hover": {
      backgroundColor: "#b71b53"
    }
  }
}));

const SubmitButton = ({ children }) => {
  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.root} type="submit">
      {children}
    </Button>
  );
};

export default SubmitButton;
