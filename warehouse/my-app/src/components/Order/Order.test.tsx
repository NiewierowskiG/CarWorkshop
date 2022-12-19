import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Order id={0} items_count={0} date={''} title={''} />, div);
  ReactDOM.unmountComponentAtNode(div);
});