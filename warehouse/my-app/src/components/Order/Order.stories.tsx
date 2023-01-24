/* eslint-disable */
import React from 'react';
import Order from './Order';

export default {
  title: "Order",
};

export const Default = () => <Order id={0} items_count={0} date={''} title={''} status={''} />;

Default.story = {
  name: 'default',
};
