import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux'
import { goToDungeon } from '../reducers/app'

class SelectedHeroes extends Component {

  constructor(props) {
    super(props);

    this.handleGoToDungeon = this.handleGoToDungeon.bind(this);
  }

  handleGoToDungeon(hero) {
    let {dispatch} = this.props;
    dispatch(goToDungeon(hero));
  }

  render() {
    let heroes = this.props.selectedHeroes;
    return (
      <ul className="hero-list">
        {Object.keys(heroes).map((key, index) => (
          <li key={index}>
            <FlatButton
              label={heroes[key].name()}
              primary={true}
              icon={<FontIcon className="fa fa-arrow-left" />}
              onClick={() => this.handleGoToDungeon(heroes[key])}
              disabled={heroes[key].in_dungeon}
            />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { selectedHeroes: state.selectedHeroes }
}

export default connect(mapStateToProps)(SelectedHeroes);
