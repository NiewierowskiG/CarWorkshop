import React from 'react';
import OrderAdd from './OrderAdd';
import { OrderProps } from '../Order/OrderProps';

it('should mount', () => {
  const { createRoot } = require("react-dom/client");
  const root = createRoot(document.createElement("div"))
  root.render(<OrderAdd onOrderFromAdd={function (order: OrderProps): void {
    throw new Error('Function not implemented.');
  } } idsList={[]} />);
  root.unmount();
});