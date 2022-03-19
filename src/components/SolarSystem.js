import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

const planetsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

class SolarSystem extends Component {
  render() {
    return (
      <div>
        <div
          data-testid="solar-system"
        >
          <Title headline="Planetas" className="titulo-planetas" />
          <div
            style={ planetsStyle }
          >
            {
              planets.map(({ name, image }) => (
                <PlanetCard key={ name } planetImage={ image } planetName={ name } />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
