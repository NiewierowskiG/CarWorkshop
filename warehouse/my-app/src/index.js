import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from "./App.tsx";
import OrderAdd from "./OrderAdd.tsx";

ReactDOM.render(
  <React.StrictMode>
      <OrderAdd />
  </React.StrictMode>,
  document.getElementById('root')
);