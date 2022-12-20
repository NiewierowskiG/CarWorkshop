import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App/App";


let rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);