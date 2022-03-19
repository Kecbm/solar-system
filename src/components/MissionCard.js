import React, { Component } from 'react';
import PropTypes from 'prop-types';

const missionCardStyle = {
  border: '2px solid rgb(178 , 178 , 182)',
  borderRadius: '17px',
  fontFamily: 'monospace',
  fontSize: '18px',
  backgroundColor: 'rgb(66, 65, 77)',
  textAlign: 'left',
  width: '300px',
  height: '200px',
  margin: '30px',
  paddingTop: '10px',
  paddingRight: '10px',
  paddingBottom: '10px',
  paddingLeft: '10px',
};

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        data-testid="mission-card"
        style={ missionCardStyle }
      >
        <p data-testid="mission-name" color="rgb(15 , 15 , 15)"><b>{ name }</b></p>
        <hr />
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>);
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
