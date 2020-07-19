import React from 'react';
import { withStyles } from "@material-ui/styles";
import styles from './styles/PaletteFooter_style'


const PaletteFooter = (props) => {
  const {classes} = props;
    return ( 
        <footer className={classes.PaletteFooter}>
        {props.paletteName}
        <span className={classes.PaletteEmoji}>{props.emoji}</span>
      </footer>
     );
}
 
export default withStyles(styles)(PaletteFooter);