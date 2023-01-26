import React from 'react';
import Crud from './Crud';

it('should mount', () => {
  const { createRoot } = require("react-dom/client");
  const root = createRoot(document.createElement("div"));
  root.render(<Crud prop={{id:0, date:'', title:'', status:'', itemNames: '', sum:0}} propType={'order'}/>);
  root.unmount();
});
