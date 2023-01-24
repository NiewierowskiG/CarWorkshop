import React, { useState } from 'react';
import { ItemProps } from '../Item/ItemProps';

interface ItemEditProps {
  item: ItemProps;
  onSave: (item: ItemProps) => void;
}

const ItemEdit: React.FC<ItemEditProps> = ({ item, onSave }) => {
  const [editedItem, setEditedItem] = useState<ItemProps>({ ...item });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(editedItem);
  };

  return (
    <form onSubmit={handleSave}>
      <label>
        ID:
        <input type="number" name="id" value={editedItem.id} readOnly />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={editedItem.name} readOnly />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" name="amount" value={editedItem.amount} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={editedItem.price} readOnly />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default ItemEdit;




