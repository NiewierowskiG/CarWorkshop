import React from 'react';
import ItemList from '../ItemList/ItemList';

const items = [
  { id: 1, name: 'Item 1', amount: 10, price: 100 },
  { id: 2, name: 'Item 2', amount: 5, price: 50 },
  { id: 3, name: 'Item 3', amount: 20, price: 200 },
];

const MyComponent = () => {
  return <ItemList items={items} />;
};

export default MyComponent;