import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";

class App extends Component {
  // find a palette with a same id name
  findPalette = (id) => seedColors.find((palette) => palette.id === id);

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(palette) => (
            <PaletteList palettes={seedColors} {...palette} />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId"
          render={(RouteProps) => (
            <Palette
              // here we used findPalette to find the id based on the current match params id
              palette={generatePalette(
                this.findPalette(RouteProps.match.params.paletteId)
              )}
            />
          )}
        />

        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(RouteProps) => (<SingleColorPalette {...RouteProps} />)}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
