import React from "react";
import Header from "./components/header/header";
import ItemList from "./components/item-list/item-list";
import PersonDetails from "./components/person-details/person-details";
import PlanetDetails from "./components/planet-details/planet-details";
import StarshipDetails from "./components/starship-details/starship-details";
import RandomPlanet from "./components/random-planet/random-planet";

export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
