import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  PaletteColors: {
    height: "90%",
  },
  BackBtn: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    background: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: " 50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
  },
};

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
