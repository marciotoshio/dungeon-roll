import React, { Component } from 'react';
import { connect } from 'react-redux'

class SelectedHeroes extends Component {

  render() {
    let heroes = this.props.selectedHeroes;
    return (
      <ul className="hero-list">
        {heroes.map((hero, index) => (
          <li key={index}>{hero.name()}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { selectedHeroes: state.selectedHeroes }
}

export default connect(mapStateToProps)(SelectedHeroes);
