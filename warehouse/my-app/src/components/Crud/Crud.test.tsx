import React from 'react';
import ReactDOM from 'react-dom';
import Crud from '../Crud/Crud';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Crud order={{id:0, items_count:0, date:'', title:'', status:''}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});