import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles/MiniPaletteList_style'


function MiniPaletteList(props) {
  const { classes, paletteName, emoji, colors, linkToPalette } = props;
  const miniColorBox = colors.map((color) => {
    return (
      <div
        className={classes.miniColorBox}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    );
  });

  return (
    <div>
      <div className={classes.root} onClick={linkToPalette}>
        <div className={classes.colors}>{miniColorBox}</div>
        <h4 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h4>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPaletteList);
