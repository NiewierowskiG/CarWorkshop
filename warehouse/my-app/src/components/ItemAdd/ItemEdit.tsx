import React, {useState} from 'react';
import {ItemListProps, ItemProps} from '../Item/ItemProps';
import {getItemFromId, putItem} from "../Services/services";
import {Link, useHistory, useParams} from 'react-router-dom';

interface ItemEditProps {
    EditItem: ItemProps;
    ItemId: number;
    // onSave: (item: ItemProps) => void;
}
type TParams = { id: string };
const ItemEdit: React.FC<ItemListProps> = ({items: initialItems}) => {
    let { id } = useParams<TParams>();
    let editItem = initialItems.filter(item => item.id === Number(id))[0]
    let [editedItem, setEditedItem] = useState<ItemProps>({...editItem});
    //console.log("IDPARAM: " + id + " IDITEM: " + editItem.id + " EDITEDITEMID: " + editedItem.id)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedItem({...editedItem, [e.target.name]: e.target.value});
    };
    const history = useHistory();
    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = putItem(editedItem)
        history.push('/Item');
        //console.log("eooo" + editedItem.id)
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




