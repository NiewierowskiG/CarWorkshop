import React, {useState} from 'react';
import {ItemListProps, ItemProps} from "../Item/ItemProps";
import ItemAdd from "../ItemAdd/ItemAdd";
import ItemEdit from "../ItemAdd/ItemEdit";


const ItemList: React.FC<ItemListProps> = ({items: initialItems}) => {
    const [items, setItems] = useState<ItemProps[]>(initialItems);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ItemAdd addItem={(item: ItemProps) => setItems([...items, item])}/>
        </div>
       /* <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <ItemEdit item={item} onSave={updatedItem => {
                                const newItems = [...items];
                                const index = newItems.findIndex(i => i.id === updatedItem.id);
                                newItems[index] = updatedItem;
                                setItems(newItems);
                            }}/>
                        </td>
                        <td>{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ItemAdd addItem={(item: ItemProps) => setItems([...items, item])}/>
        </div>*/
    );
};

export default ItemList;