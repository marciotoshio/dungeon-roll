import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux'
import { goToTavern } from '../reducers/app'

class HeroInDungeon extends Component {

  constructor(props) {
    super(props);

    this.handleGoToTavern = this.handleGoToTavern.bind(this);
  }

  handleGoToTavern(hero) {
    let {dispatch} = this.props;
    dispatch(goToTavern(hero));
  }

  render() {
    let heroes = this.props.selectedHeroes;
    let hero = Object.values(heroes).find(hero => hero.in_dungeon);
    if(!hero) return <div />
    return (
      <FlatButton
        label={hero.name()}
        primary={true}
        labelPosition="before"
        icon={<FontIcon className="fa fa-arrow-right" />}
        onClick={() => this.handleGoToTavern(hero)}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return { selectedHeroes: state.selectedHeroes }
}

export default connect(mapStateToProps)(HeroInDungeon);
