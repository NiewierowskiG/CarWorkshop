import React from 'react';
import './Order.module.css';
import { OrderProps } from './OrderProps';

const Order: React.FunctionComponent<OrderProps> = ({ id, date, title, status, itemNames, sum }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{date}</td>
      <td>{title}</td>
      <td>{status}</td>
      <td>{itemNames}</td>
      <td>{sum}</td>
    </tr>
  );
};

export default Order;