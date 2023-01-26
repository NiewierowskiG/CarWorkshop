import React, {useState} from 'react';
import {ItemProps} from '../Item/ItemProps';
import {putItem} from "../Services/services";

interface ItemEditProps {
    EditItem: ItemProps;
    // onSave: (item: ItemProps) => void;
}

const ItemEdit: React.FC<ItemEditProps> = ({EditItem}) => {
    const [editedItem, setEditedItem] = useState<ItemProps>({...EditItem});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedItem({...editedItem, [e.target.name]: e.target.value});
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = putItem(editedItem)
        console.log("eooo" + editedItem)
    };

    return (
        <form onSubmit={handleSave}>
            <label>
                Name:
                <input type="text" name="name" value={editedItem.name} onChange={handleInputChange}/>
            </label>
            <label>
                Amount:
                <input type="number" name="amount" value={editedItem.amount} onChange={handleInputChange}/>
            </label>
            <label>
                Price:
                <input type="number" name="price" value={editedItem.price} onChange={handleInputChange}/>
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default ItemEdit;




