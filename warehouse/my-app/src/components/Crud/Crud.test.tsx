import React from 'react';
import ReactDOM from 'react-dom';
import Crud from './Crud';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Crud order={{id:0, worker : { person :{id:0, name:"", surname:'', telNr:0, email:''}, position:{name:"",canCreateClients:false,canCreateWorkers:false}, salary:0}, date:'', title:'', status:''}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});