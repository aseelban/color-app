import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover button": {
      transition: "0.5s",
    },
  },
};

const DraggableColorBox = (props) => {
  return <div className={props.classes.root} style={{ background: props.color }}>{props.name}</div>;
};

export default withStyles(styles)(DraggableColorBox);