import React from 'react';
import ReactDOM from 'react-dom';
import HeroSelect from '../../components/HeroSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroSelect />, div);
});
