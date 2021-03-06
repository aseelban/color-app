import React, { Component } from "react";
import MiniPaletteList from "./MiniPaletteList";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteListStyle";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import logo from '../img/logo.png'


class PaletteList extends Component {
  state = {
    openDeleteDialog: false,
    deletingId: "",
  };
  openDialog = (id) => {
    this.setState({ openDeleteDialog: true, deletingId: id });
  };
  closeDialog = () => {
    this.setState({ openDeleteDialog: false, deletingId: "" });
  };

  handleDelete = () => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }

  // route to specific link based on the param "id" which is coming from {...palette} (id) props.
  linkToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;


    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            {/* <h1 className={classes.logo}>React color</h1> */}
            <img src={logo} />
            <Link className={classes.generatorLink} to="/palette/new">Start the generator!</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPaletteList
                  {...palette}
                  linkToPalette={this.linkToPalette}
                  openDialog={this.openDialog}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
