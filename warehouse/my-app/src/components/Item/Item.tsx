import React from 'react';
import ItemList from '../ItemList/ItemList';


export let items3 = [
  { id: 1, name: 'Item 1', amount: 10, price: 100 },
  { id: 2, name: 'Item 2', amount: 5, price: 50 },
  { id: 3, name: 'Item 3', amount: 20, price: 200 },
];
export let items2 = localStorage.getItem("items");
const Item = () => {
  //console.log("EOOOOOO" + items)
  return <ItemList items={items3} />;
};

export default Item;