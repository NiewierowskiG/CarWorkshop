import React, {useState} from 'react';
// import OrdersList from '../OrderList/OrderList';
import './Order.module.css';
import { OrderListProps, OrderProps } from './OrderProps';

const Order: React.FunctionComponent<OrderListProps> = ({orders: initialItems}) => {
    const [orders, setOrders] = useState<OrderProps[]>(initialItems);
    console.log(orders);
  return (
   <table style={{width: "80%"}}>
   <thead>
       <tr>
           <th>Data:</th>
           <th>Nazwa:</th>
           <th>Status:</th>
           <th>Zawartość:</th>
           <th>Suma:</th>
       </tr>
   </thead>
   <tbody>
   {orders.map(order=>(
        <tr key={order.id}>
            <td>Data: {order.date}</td>
            <td>Nazwa: {order.title}</td>
            <td>Status: {order.status}</td>
            <td>Zawartość: {order.itemNames}</td>
            <td>Suma: {order.sum}</td>
        </tr>
    ))}
   </tbody>
</table>

  );
};

export default Order;