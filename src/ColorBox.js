import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from 'chroma-js'
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, url_toSingleColorPalette, showLink } = this.props;
    const { copied } = this.state;
    // change the text color to dark if a palette color is light
    const isDarkColor = chroma(background).luminance() <= 0.08;
    // change the text color to light if a palette color is dark
    const isLightColor = chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={`${isLightColor && 'dark-text'}`}>copied!</h1>
            <p className={`${isLightColor && 'dark-text'}`}>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={`${isDarkColor && 'light-text'}`}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</button>
          </div>

          {showLink && (
            <Link
              to={url_toSingleColorPalette}
              onClick={e => e.stopPropagation()}
            >
              <span className={`see-more ${isLightColor && 'dark-text'}`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
