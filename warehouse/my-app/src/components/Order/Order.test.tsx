import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Order id={0} items_count={0} date={''} title={''} status={''} />, div);
  ReactDOM.unmountComponentAtNode(div);
});