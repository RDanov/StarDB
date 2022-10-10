import React from "react";

import "./random-planet.css";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 15 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { planet, loading } = this.state;

    const content = !loading ? <PlanetView planet={planet} /> : <Spinner />;

    return <div className="random-planet jumbotron rounded">{content}</div>;
  }
}

const PlanetView = ({ planet }) => {
  const { population, rotationPeriod, diameter, name, id } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">{population}</span>
            <span>123124</span>
          </li>
          <li className="list-group-item">
            <span className="term">{rotationPeriod}</span>
            <span>43</span>
          </li>
          <li className="list-group-item">
            <span className="term">{diameter}</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default RandomPlanet;
