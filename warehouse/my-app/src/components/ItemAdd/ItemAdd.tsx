import React, { useState } from 'react';
import { ItemProps } from '../Item/ItemProps';

const ItemAdd: React.FC<{ addItem: (item: ItemProps) => void }> = ({ addItem }) => {
  const [newItem, setNewItem] = useState<ItemProps>({ id: 0, name: '', price: 0, amount: 0 });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem({ id: 0, name: '', price: 0, amount: 0 });
  };

   return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" name="id" value={newItem.id} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" name="amount" value={newItem.amount} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={newItem.price} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemAdd;