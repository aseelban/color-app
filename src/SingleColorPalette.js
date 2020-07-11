import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherColor(this.props.palette, this.props.colorId);
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
  render() {
    const colorBoxes = this._shades.map((color) => {
      return (
        <ColorBox
          key={color.key}
          name={color.name}
          background={color.hex}
          showLink={false}
        />
      );
    });
    return (
      <div className="Palette">
        <h1>single colors</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
