import React, { Component } from 'react';

const headerStyle = {
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  textAlign: 'center',
  margin: '10px',
  padding: '30px',
};

class Header extends Component {
  render() {
    return (
      <div
        style={ headerStyle }
      >
        <header>
          <h1>Sistema Solar</h1>
        </header>
      </div>
    );
  }
}

export default Header;
