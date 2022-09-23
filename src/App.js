import React from "react";
import Header from "./components/header/header";
import ItemList from "./components/item-list/item-list";
import PersonDetails from "./components/person-details/person-details";
import PlanetDetails from "./components/planet-details/planet-details";
import StarshipDetails from "./components/starship-details/starship-details";
import RandomPlanet from "./components/random-planet/random-planet";

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col md-6">
          <ItemList />
        </div>
        <div className="col md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
