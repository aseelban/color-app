import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../styles/MiniPaletteListStyle";

const MiniPaletteList = React.memo((props) => {
  console.log(props);
  const {
    classes,
    paletteName,
    emoji,
    colors,
    id,
    openDialog,
    linkToPalette,
  } = props;

  const deletePalette = (e) => {
    e.stopPropagation();

    openDialog(id);
  };

  const miniColorBox = colors.map((color) => {
    return (
      <div
        className={classes.miniColorBox}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    );
  });

  const handleLinkToPalette = () => {
    linkToPalette(id)
  }

  return (
    <div>
      <div className={classes.root} onClick={handleLinkToPalette}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={deletePalette}
        />
        <div className={classes.colors}>{miniColorBox}</div>
        <h4 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h4>
      </div>
    </div>
  );
});
export default withStyles(styles)(MiniPaletteList);
