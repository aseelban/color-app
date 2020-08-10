import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from './styles/Palette_style'

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherColor(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
  }

  gatherColor = (palette, colorFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorFilterBy)
      );
    }

    // skip first palette because it has white color
    return shades.slice(1);
  };

  changeFormat = (val) => {
    this.setState({ format: val });
  };
  render() {
    const { classes } = this.props;
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;

    const colorBoxes = this._shades.map((color) => {
      return (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[format]}
          showingFullPalette={false}
        />
      );
    });
    return (
      <div className={classes.Palette}>
        {/* navbar */}
        <Navbar handleChange={this.changeFormat} addColorLevel={false} />
        {/* main */}
        <div className={classes.PaletteColors}>
          {colorBoxes}
          {/* go back to previous route */}
          <div className={classes.BackBtn}>
            <Link to={`/palette/${id}`}>Go back</Link>
          </div>
        </div>
        {/* footer */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
