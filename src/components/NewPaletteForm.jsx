import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import styles from "../styles/NewPaletteFormStyle";
import seedColors from "../helper/seedColors";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColor: 20,
  };

  state = {
    open: true,
    colors: seedColors[0].colors,
    newPaletteName: "",
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  // update the current background color state
  updateCurrentColor = (color) => this.setState({ currentColor: color.hex });

  // push new colors to array
  addNewColor = (newColor) => {
    this.setState({
      colors: [...this.state.colors, newColor],
    });
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-"); // get a paletteName data and replace a space to (-).
    newPalette.colors = this.state.colors;

    // pass newPalette to props as parameter
    this.props.savePalette(newPalette);

    // redirect to homepage
    this.props.history.push("/");
  };

  removeColor = (colorName) => {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  };

  // change color index after Draggable done, for example if user move color x to color b index, then save the index value to state
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  // remove all palettes items
  clearPalette = () => {
    this.setState({
      colors: [],
    });
  };

  // pick random color from existing palettes
  randomColor = () => {
    const allColors =
      this.props.palettes.length === 0
        ? seedColors.map((p) => p.colors).flat()
        : this.props.palettes.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = this.state.colors.some(
        (color) => color.name === randomColor.name
      );
    }

    this.setState({ colors: [...this.state.colors, randomColor] });
  };

  render() {
    const { classes, maxColor, palettes } = this.props;
    const { open, colors } = this.state;

    // check if color palette length is limit to 20 items only
    const paletteIsFull = colors.length >= maxColor;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          {/* create new palette  */}
          <Divider />
          <Typography className={classes.title} variant="h4" gutterBottom>
            Desgin your palete
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearPalette}
              className={classes.button}
            >
              Clear palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.randomColor}
              disabled={paletteIsFull}
              className={classes.button}
            >
              Random color
            </Button>
          </div>

          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addNewColor={this.addNewColor}
            colors={colors}
          />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={this.state.colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={20}
          />
        </main>
      </div>
    );
  }
}

NewPaletteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
