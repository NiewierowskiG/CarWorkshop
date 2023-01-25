import React, { useState } from 'react';
import { ItemProps } from '../Item/ItemProps';
import ValueValidate from "../ValueValidate/ValueValidate";
import {isValidId, isValidNumber} from "../ValueValidate/utils/validators";
import ItemList from '../ItemList/ItemList';
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
  const [showAdd, setShowAdd] = useState(true)
   return (
     <form style={{position: 'absolute', backgroundColor: 'red', left: '70%', width: "400px"}} onSubmit={handleSubmit}> 
          <label>
            ID:
            <input type="number" name="id" value={newItem.id} onChange={handleInputChange} />
              <ValueValidate  value={newItem.id} validationFunction={isValidId} errorMessage={"Nieprawidłowe ID"}/>
          </label>
          <br />
          <label>
            Name:
            <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Amount:
            <input type="number" step={0.01} name="amount" value={newItem.amount} onChange={handleInputChange} />
            <ValueValidate  value={newItem.amount} validationFunction={isValidNumber} errorMessage={"Nieprawidłowa ilość"}/>
          </label>
          <br />
          <label>
            Price:
            <input type="number" step={0.01} name="price" value={newItem.price} onChange={handleInputChange} />
            <ValueValidate  value={newItem.price} validationFunction={isValidNumber} errorMessage={"Nieprawidłowa cena"}/>
          </label>
          <br />
          <button onClick={() => setShowAdd(!showAdd)} type="submit">Add Item</button>
        </form>
  );
};

export default ItemAdd;