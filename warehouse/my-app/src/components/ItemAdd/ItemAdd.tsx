import React, { useState } from 'react';
import { ItemProps } from '../Item/ItemProps';
import ValueValidate from "../ValueValidate/ValueValidate";
import {isValidId, isValidNumber} from "../ValueValidate/utils/validators";
import ItemList from '../ItemList/ItemList';
import './ItemActions.css'
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
     <form style={{}} onSubmit={handleSubmit}> 
          <label>
          <span>Nr. ID:</span>
            <input type="number" name="id" value={newItem.id} onChange={handleInputChange} />
              <ValueValidate  value={newItem.id} validationFunction={isValidId} errorMessage={"Nieprawidłowe ID"}/>
          </label>
          <label>
           <span> Nazwa części:</span>
            <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
          </label>
          <label>
            <span>Ilość:</span>
            <input type="number" step={0.01} name="amount" value={newItem.amount} onChange={handleInputChange} />
            <ValueValidate  value={newItem.amount} validationFunction={isValidNumber} errorMessage={"Nieprawidłowa ilość"}/>
          </label>
          <label>
          <span>Cena (1 sztuka):</span>
            <input type="number" step={0.01} name="price" value={newItem.price} onChange={handleInputChange} />
            <ValueValidate  value={newItem.price} validationFunction={isValidNumber} errorMessage={"Nieprawidłowa cena"}/>
          </label>
          <button style={{marginLeft:"auto",marginRight:"auto", marginBottom: '10px', marginTop: '20px', padding: '8px' }}onClick={() => setShowAdd(!showAdd)} type="submit">Add Item</button>
        </form>
  );
};

export default ItemAdd;