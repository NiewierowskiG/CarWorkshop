/* eslint-disable */
import React from 'react';
import Crud from './Crud';

export default {
  title: "Crud",
};

export const Default = () => <Crud prop={{id:0, date:'', title:'', status:'', itemNames: '', sum:0}} propType={'order'}/>;

Default.story = {
  name: 'default',
};
