import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import '../assets/hero_select.css';
import heroList from '../models/hero';
import { selectHero } from '../reducers/app'

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
          <li key={index}>
            <RaisedButton
              label={hero.full_name()}
              primary={true}
              onClick={() => this.handleSelectHero(hero)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default connect()(HeroSelect);
