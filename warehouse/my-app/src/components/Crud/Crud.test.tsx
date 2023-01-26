import React from 'react';
import ReactDOM from 'react-dom';
import Crud from './Crud';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Crud prop={{id:0, date:'', title:'', status:'', itemNames: '', sum:0}} propType={'order'}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});