import React from 'react';
import './Order.module.css';

interface OrderProps {
  id: number;
  items_count: number;
  date: string;
  title: string;
}

const Order: React.FunctionComponent<OrderProps> = ({ id, items_count, date, title }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{items_count}</td>
      <td>{date}</td>
      <td>{title}</td>
    </tr>
  );
};

export default Order;