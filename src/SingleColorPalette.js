import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter'

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
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;


    const colorBoxes = this._shades.map((color) => {
      return (
        <ColorBox
          key={color.key}
          name={color.name}
          background={color[format]}
          showLink={false}
        />
      );
    });
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} addColorLevel={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
