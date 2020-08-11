import React, { Component } from "react";
import MiniPaletteList from "./MiniPaletteList";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteList_style";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  // route to specific link based on the param "id" which is coming from {...palette} (id) props.
  linkToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes, classes, deletePalete } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.logo}>React color</h1>
            <Link to="/palette/new">New Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPaletteList
                  {...palette}
                  linkToPalette={() => this.linkToPalette(palette.id)}
                  handleDelete={deletePalete}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
