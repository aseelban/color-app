import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';


const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    // change the removeIcon color on hover
    "&:hover svg": {
      color: "#fff",
      transform: "scale(1.3)"
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    padding: 10,
    color: "rgba(0,0,0,0.5)",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontSize: 12,
    display: 'flex',
    justifyContent: 'space-between'
  },
  removeIcon: {
    color: "rgba(0,0,0,0.5)",
    cursor:'pointer',
    transition: "all 0.3s ease-in-out"
    
  }
};

const DraggableColorBox = (props) => {
  const { classes } = props;

  return (
    <div className={props.classes.root} style={{ background: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteSharpIcon onClick={props.handleClick}  className={classes.removeIcon} />
      </div>
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
