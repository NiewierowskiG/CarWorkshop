import React from 'react';
import ReactDOM from 'react-dom';
import OrderList from './OrderList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderList orders={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});