import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px 0 50px 0",
    backgroundColor: "#b71b53",
    width: "300px",
    "@media (max-width: 800px)": {
      width: "100%"
    },
    color: "white",
    border: "none",
    "&:hover": {
      backgroundColor: "#353535"
    },
    "&:disabled": { backgroundColor: "#353535", color: "white" }
  }
}));

const SubmitButton = ({ children, onClick, disabled }) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      className={classes.root}
      type="submit"
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
