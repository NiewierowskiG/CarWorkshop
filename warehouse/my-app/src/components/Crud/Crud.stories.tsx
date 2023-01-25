/* eslint-disable */
import React from 'react';
import Crud from './Crud';

export default {
  title: "Crud",
};

export const Default = () => <Crud prop={{id:0, worker : { person :{id:0, name:"", surname:'', telNr:0, email:''}, position:{name:"",canCreateClients:false,canCreateWorkers:false}, salary:0}, date:'', title:'', status:''}} propType={'order'}/>;

Default.story = {
  name: 'default',
};
