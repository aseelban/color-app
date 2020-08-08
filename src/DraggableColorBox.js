import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {SortableElement} from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyle'

const DraggableColorBox = SortableElement((props) => {
  const { classes } = props;

  return (
    <div className={props.classes.root} style={{ background: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteSharpIcon onClick={props.handleClick}  className={classes.removeIcon} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
