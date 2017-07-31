import '../assets/mat.css';
import React, { Component } from 'react';
import HeroInDungeon from './HeroInDungeon'
import SelectedHeroes from './SelectedHeroes'

class Mat extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mat-component mat-short col-xs-2">Nível</div>
          <div className="mat-component mat-short col-xs-4">Covil do Dragão</div>
          <div className="mat-component mat-short col-xs-6">Cemitério</div>
        </div>
        <div className="row">
          <div className="mat-component mat-tall col-xs-9">
            <h2>Dungeon</h2>
            <HeroInDungeon />
          </div>
          <div className="mat-component mat-tall col-xs-3">
            <h2>Taverna</h2>
            <SelectedHeroes />
          </div>
        </div>
      </div>
    );
  }
}

export default Mat;
