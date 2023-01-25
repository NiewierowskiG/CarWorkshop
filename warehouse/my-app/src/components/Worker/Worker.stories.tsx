/* eslint-disable */
import React from 'react';
import Worker from './Worker';

export default {
  title: "Worker",
};

export const Default = () => <Worker person={{id:0, name:"", surname:'', telNr:0, email:''}} position={{name:"",canCreateClients:false,canCreateWorkers:false}} salary={0}  />;

Default.story = {
  name: 'default',
};
