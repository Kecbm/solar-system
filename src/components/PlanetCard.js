import React, { Component } from 'react';
import PropTypes from 'prop-types';

const planetCardStyle = {
  textAlign: 'center',
  fontFamily: 'monospace',
  fontSize: '20px',
  margin: '40px',
};

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        data-testid="planet-card"
        style={ planetCardStyle }
      >
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name"><b>{ planetName }</b></p>
      </div>);
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
