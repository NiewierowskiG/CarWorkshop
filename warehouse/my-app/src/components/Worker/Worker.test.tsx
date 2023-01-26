import React from 'react';
import Worker from './Worker';

it('should mount', () => {
  const { createRoot } = require("react-dom/client");
  const root = createRoot(document.createElement("div"))
  root.render(<Worker person={{ id: 0, name: "", surname: '', telNr: 0, email: '' }} position={{name:"",canCreateClients:false,canCreateWorkers:false}} salary={0}  />);
  root.unmount();
});