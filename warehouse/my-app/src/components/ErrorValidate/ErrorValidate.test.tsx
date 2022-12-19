import * as React from 'react';
import ReactDOM from 'react-dom';
import ErrorValidate from './ErrorValidate';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorValidate  error={['Some error message']}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});