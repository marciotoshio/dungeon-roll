import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../assets/app.css';
import HeroSelect from './HeroSelect';
import Mat from './Mat';
import { reset } from '../actions'

class App extends Component {

  constructor(props) {
    super(props);

    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    let {dispatch} = this.props;
    dispatch(reset());
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Welcome to Dungeon Roll</h2>
        </div>
        <HeroSelect />
        <Mat />
        <button onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}

export default connect()(App);
