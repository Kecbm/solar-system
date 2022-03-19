import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

const appStyle = {
  backgroundColor: 'rgb(43, 42, 51)',
  borderRadius: '20px',
  margin: '10px',
  padding: '20px',
  marginTop: '10px',
};

class App extends React.Component {
  render() {
    return (
      <div
        style={ appStyle }
      >
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
