import React from 'react';
import ReactDOM from 'react-dom';
import OrderList from './OrderList';
import { OrderProps } from '../Order/OrderProps';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderList orders={[]} onOrderFromList={function (order: OrderProps): void {
    throw new Error('Function not implemented.');
  } } idsList={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});