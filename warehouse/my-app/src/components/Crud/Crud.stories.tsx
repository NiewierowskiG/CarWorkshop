/* eslint-disable */
import React from 'react';
import Crud from '../Crud/Crud';

export default {
  title: "Crud",
};

export const Default = () => <Crud order={{id:0, items_count:0, date:'', title:'', status:''}} />;

Default.story = {
  name: 'default',
};
