import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

const missionsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

class Missions extends Component {
  render() {
    return (
      <div>
        <div data-testid="missions">
          <Title headline="Missões" />
          <div
            style={ missionsStyle }
          >
            {
              missions.map((missao, indice) => (
                <MissionCard
                  key={ indice }
                  name={ missao.name }
                  year={ missao.year }
                  country={ missao.country }
                  destination={ missao.destination }
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
