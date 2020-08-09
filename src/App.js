import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {

  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("saved_palettes"));
    this.state = { palettes: savedPalettes || seedColors };
  }

  findPalette = (id) =>
    this.state.palettes.find((palette) => palette.id === id);

  savePalette = (newPalette) => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
    console.log(newPalette)

  };


  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "saved_palettes",
      JSON.stringify(this.state.palettes)
    );

  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(palette) => (
            <NewPaletteForm
              palettes={this.state.palettes}
              savePalette={this.savePalette}
              {...palette}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(palette) => (
            <PaletteList palettes={this.state.palettes} {...palette} />
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
          render={(RouteProps) => (
            <SingleColorPalette
              // here we used findPalette to find the id based on the current match params id
              palette={generatePalette(
                this.findPalette(RouteProps.match.params.paletteId)
              )}
              colorId={RouteProps.match.params.colorId}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
