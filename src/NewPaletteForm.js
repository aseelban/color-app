import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { SketchPicker } from "react-color";
import { colors } from "@material-ui/core";
import DraggableColorBox from "./DraggableColorBox";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  state = {
    open: false,
    currentColor: "teal",
    colors: [{ color: "blue", name: "blue" }],
    newColor: "",
  };

  //const {currentColor, colors} = this.state;

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  // update the current background color state
  updateCurrentColor = (color) => this.setState({ currentColor: color.hex });
  // push new colors to array
  addColors = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColor,
    };
    this.setState({ colors: [...this.state.colors, newColor], newColor: '' });
    console.log(this.state.colors);
  };
  handleChange = (event) => {
    this.setState({ newColor: event.target.value });
  };

  componentDidMount() {
    // Validate the Color name field
    // Color name must be unique
    ValidatorForm.addValidationRule("isNameUnique", (value) =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    // Validate the Color
    ValidatorForm.addValidationRule("isColorUnique", () =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Choose your palette
            </Typography>
          </Toolbar>
        </AppBar>
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
          <Typography variant="h4">Desgin your palete</Typography>
          <div>
            <Button variant="contained" color="secondary">
              Clear palette
            </Button>
            <Button variant="contained" color="primary">
              Random color
            </Button>
          </div>
          <SketchPicker
            color={this.state.currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          {/* validate color */}
          <ValidatorForm onSubmit={this.addColors}>
            <TextValidator
              onChange={this.handleChange}
              value={this.state.newColor}
              validators={["required", "isNameUnique", "isColorUnique"]}
              errorMessages={[
                "Enter a color name",
                "Color name must be unique.",
                "Color is alredy used.",
              ]}
            />
            <Button
              variant="contained"
              style={{ background: this.state.currentColor }}
              color={this.state.currentColor}
              type={"submit"}
            >
              Save color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {this.state.colors.map((color) => {
            return <DraggableColorBox color={color.color} name={color.name} />;
          })}
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
