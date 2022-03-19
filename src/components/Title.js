import React, { Component } from 'react';
import PropTypes from 'prop-types';

const titleStyle = {
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: '18px',
  textAlign: 'center',
  border: '1px solid #FFFFFF',
  borderRadius: '20px',
  backgroundColor: 'rgb(28, 27, 34)',
};

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div
        style={ titleStyle }
      >
        <h2>{headline}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
