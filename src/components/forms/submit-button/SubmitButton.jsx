import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px 0 50px 0",
    backgroundColor: "#b71b53",
    position: "relative",
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
  },
  picto: {
    position: "absolute",
    left: "10px",
    height: "50%"
  }
}));

const SubmitButton = ({ children, onClick, disabled, role }) => {
  const classes = useStyles();
  return (
    <div className="button-parent">
      <Button
        variant="outlined"
        onClick={onClick}
        className={classes.root}
        type="submit"
        disabled={disabled}
        style={{ marginTop: role === "download" && "-40px" }}
      >
        {/* <img
          className={classes.picto}
          src={role === "save" ? save : role === "download" ? download : play}
          alt="button-picto"
        /> */}
        {role === "save" ? (
          <i
            className="fas fa-save"
            style={{
              position: "absolute",
              left: "10px",
              top: "7px",
              fontSize: "20px"
            }}
          />
        ) : role === "download" ? (
          <i
            className="fas fa-download"
            style={{
              position: "absolute",
              left: "10px",
              top: "7px",
              fontSize: "20px"
            }}
          />
        ) : (
          <i
            className="fas fa-play-circle"
            style={{
              position: "absolute",
              left: "10px",
              top: "7px",
              fontSize: "20px"
            }}
          />
        )}

        {children}
      </Button>
    </div>
  );
};

export default SubmitButton;
