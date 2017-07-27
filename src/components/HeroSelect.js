import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../assets/hero_select.css';
import heroList from '../models/hero';
import { selectHero } from '../actions'

class HeroSelect extends Component {

  constructor(props) {
    super(props);

    this.heroes = heroList;

    this.handleSelectHero = this.handleSelectHero.bind(this);
  }

  handleSelectHero(hero) {
    let {dispatch} = this.props;
    dispatch(selectHero(hero));
  }

  render() {
    return (
      <ul className="hero-select">
        {this.heroes.map((hero, index) => (
          <li key={index}><button onClick={() => this.handleSelectHero(hero)}>{hero.full_name()}</button></li>
        ))}
      </ul>
    );
  }
}

export default connect()(HeroSelect);
