import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteList_style";

function MiniPaletteList(props) {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    linkToPalette,
    id,
    handleDelete,
  } = props;

  const deletePalette = (e) => {
    e.stopPropagation();
    //handleDelete: function to delete palette on home page, function delared on app then pass to -paletteList then used here as props.
    // id : each palette has in id, to delete one u must provide that id.
    handleDelete(id);
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

  return (
    <div>
      <div className={classes.root} onClick={linkToPalette}>
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
}

export default withStyles(styles)(MiniPaletteList);
