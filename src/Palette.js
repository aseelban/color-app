import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  PaletteColors: {
    height: '90%',
  }
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
  }
  changeLevel = (level) => {
    this.setState({ level });
  };
  changeFormat = (val) => {
    this.setState({ format: val });
  };
  render() {
    const {classes} = this.props
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        url_toSingleColorPalette={`/palette/${id}/${color.id}`}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        {/* navbar */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          addColorLevel={true}
        />
        {/* main */}
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        {/* footer */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
