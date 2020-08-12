import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(
      window.localStorage.getItem("saved_palettes")
    );
    this.state = { palettes: savedPalettes || seedColors };
  }

  findPalette = (id) =>
    this.state.palettes.find((palette) => palette.id === id);

  savePalette = (newPalette) => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
    console.log(newPalette);
  };

  //save palettes to local storage
  syncLocalStorage() {
    window.localStorage.setItem(
      "saved_palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  //delete palette
  deletePalette = (id) => {
    const { palettes } = this.state;

    this.setState(
      {
        palettes: palettes.filter((item) => item.id !== id),
      },
      this.syncLocalStorage
    );
  };

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={(palette) => (
                    <div className="page">
                      <NewPaletteForm
                        palettes={this.state.palettes}
                        savePalette={this.savePalette}
                        {...palette}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(palette) => (
                    <div className="page">
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...palette}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId"
                  render={(RouteProps) => (
                    <div className="page">
                      <Palette
                        // here we used findPalette to find the id based on the current match params id
                        palette={generatePalette(
                          this.findPalette(RouteProps.match.params.paletteId)
                        )}
                      />
                    </div>
                  )}
                />

                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(RouteProps) => (
                    <div className="page">
                      <SingleColorPalette
                        // here we used findPalette to find the id based on the current match params id
                        palette={generatePalette(
                          this.findPalette(RouteProps.match.params.paletteId)
                        )}
                        colorId={RouteProps.match.params.colorId}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
