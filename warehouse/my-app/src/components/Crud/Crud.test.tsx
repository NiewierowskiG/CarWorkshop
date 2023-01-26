import React from 'react';
import Crud from './Crud';

it('should mount', () => {
  const { createRoot } = require("react-dom/client");
  const root = createRoot(document.createElement("div"));
  root.render(<Crud prop={{id:0, worker : { person :{id:0, name:"", surname:'', telNr:0, email:''}, position:{name:"",canCreateClients:false,canCreateWorkers:false}, salary:0}, date:'', title:'', status:''}} propType={'order'}/>);
  root.unmount();
  });