import React, { Component } from "react";
import MiniPaletteList from "./MiniPaletteList";
import { withStyles } from "@material-ui/styles";
import styles from './styles/PaletteList_style'
import { Link } from 'react-router-dom'




class PaletteList extends Component {
  // route to specific link based on the param "id" which is coming from {...palette} (id) props.
  linkToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes, classes,deletePalete } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React color</h1>
            <Link to="/palette/new">New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPaletteList
                {...palette}
                linkToPalette={() => this.linkToPalette(palette.id)}
                handleDelete={deletePalete}
                key={palette.id}
                id={palette.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
