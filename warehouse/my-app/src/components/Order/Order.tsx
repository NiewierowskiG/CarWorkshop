import React, {useState} from 'react';
import './Order.module.css';
import { OrderProps, OrderListProps } from './OrderProps';

const Order: React.FC<OrderProps> = ({orders: initialOrders}) => {
    const [items, setItems] = useState<OrderProps[]>(initialOrders);
  return (
    <div style={{display: 'flex', marginLeft: '5%', marginRight: '5%', marginTop: '50px'}}>
    <table style={{width: "70%"}}>
        <thead>
            <tr>
                <th>Nazwa zamówienia:</th>
                <th>Data:</th>
                <th>Zawartość zamówienia:</th>
                <th>Całkowita cena:</th>
            </tr>
        </thead>
        <tbody>
        {/* {items.map(item => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
                <td>{item.price*item.amount}</td>
            </tr>
        ))} */}
        </tbody>
    </table>
</div>
  );
};

export default Order;