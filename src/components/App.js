import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux'
import '../assets/app.css';
import HeroSelect from './HeroSelect';
import Mat from './Mat';
import { reset } from '../reducers/app'

injectTapEventPlugin();

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
          <h2>Dungeon Roll</h2>
        </div>
        <HeroSelect />
        <Mat />
        <div className="app-footer">
          <RaisedButton label="Novo jogo!" secondary={true} onClick={() => this.handleReset()} />
        </div>
      </div>
    );
  }
}

export default connect()(App);
