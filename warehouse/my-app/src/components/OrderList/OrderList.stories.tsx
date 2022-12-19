/* eslint-disable */
import React from 'react';
import OrderList from './OrderList';

export default {
  title: "OrderList",
};

export const Default = () => <OrderList orders={[]} />;

Default.story = {
  name: 'default',
};
