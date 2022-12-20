/* eslint-disable */
import React from 'react';
import OrderAdd from './OrderAdd';
interface OrderProps {
  id: number;
  items_count: number;
  date: string;
  title: string;
}

export default {
  title: "OrderAdd",
};

export const Default = () => <OrderAdd onOrderFromAdd={(order: OrderProps) => { } } idsList={[]} />;

Default.story = {
  name: 'default',
};
