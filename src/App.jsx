import React, { Component } from "react";
import Palette from "./component/Palette";
import seedColors from "./helper/seedColors";
import PaletteList from "./component/PaletteList";
import { generatePalette } from "./helper/colorHelpers";
import { Route, Switch } from "react-router-dom";
import SingleColorPalette from "./component/SingleColorPalette";
import NewPaletteForm from "./component/NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from './component/Page'

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
                    <Page>
                      <NewPaletteForm
                        palettes={this.state.palettes}
                        savePalette={this.savePalette}
                        {...palette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(palette) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...palette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId"
                  render={(RouteProps) => (
                    <Page>
                      <Palette
                        // here we used findPalette to find the id based on the current match params id
                        palette={generatePalette(
                          this.findPalette(RouteProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(RouteProps) => (
                    <Page>
                      <SingleColorPalette
                        // here we used findPalette to find the id based on the current match params id
                        palette={generatePalette(
                          this.findPalette(RouteProps.match.params.paletteId)
                        )}
                        colorId={RouteProps.match.params.colorId}
                      />
                    </Page>
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
