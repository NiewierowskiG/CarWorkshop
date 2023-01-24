import React from 'react';
import './Order.module.css';
import { OrderProps } from './OrderProps';

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