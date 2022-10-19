import React from "react";

import "./random-planet.css";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 5000);
  }

  onError = (error) => {
    this.setState({ error: true, loading: false });
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    //const errorMessage = error ? <ErrorMessage /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : <Spinner />;

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
        alt="foto"
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
