import React from 'react';
import ReactDOM from 'react-dom';
import Worker from './Worker';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Worker person={{ id: 0, name: "", surname: '', telNr: 0, email: '' }} position={{name:"",canCreateClients:false,canCreateWorkers:false}} salary={0}  />, div);
  ReactDOM.unmountComponentAtNode(div);
});