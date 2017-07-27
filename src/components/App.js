import React, { Component } from 'react';
import '../assets/app.css';
import HeroSelect from './HeroSelect';
import Mat from './Mat';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Welcome to Dungeon Roll</h2>
        </div>
        <HeroSelect />
        <Mat />
      </div>
    );
  }
}

export default App;
