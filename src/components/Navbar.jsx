import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "../styles/NavbarStyle";
import logo from '../img/logo.png'


class Navbar extends Component {
  state = { format: "hex", open: false };

  handleFormatChange = (e) => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  };
  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel, addColorLevel, classes } = this.props;
    const { format } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.Navbar}
      >
        <Grid className={classes.logo} item xs={12} sm={4} md={1}>
          <div>
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
        </Grid>
        <Grid className={classes.level} item xs={6} sm={5} md={7}>
          {addColorLevel && (
            <div>
              <span>Level: {level}</span>
              <div className={classes.slider}>
                <Slider
                  defaultValue={level}
                  min={100}
                  max={900}
                  step={100}
                  onAfterChange={changeLevel}
                />
              </div>
            </div>
          )}
        </Grid>
        <Grid className={classes.selectContainer} item xs={6} sm={3} md={3}>
          <div>
            <Select value={format} onChange={this.handleFormatChange}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
            </Select>
          </div>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(Navbar);
