import React from 'react';
import Order from './Order';

it('should mount', () => {
  const { createRoot } = require("react-dom/client");
  const root = createRoot(document.createElement("div"))
  root.render(<Order orders={[]} />);
  
});
