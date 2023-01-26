import React from 'react';
import Order from './Order';


jest.mock('axios', async () => {
  let { AUTH_TOKEN } = await import('../Config/Config');
  return {
     defaults: {
        headers: {
           common: {
              Authorization: AUTH_TOKEN
           }
        }
     },
     get: jest.fn(() => Promise.resolve({ data: {} })),
     post: jest.fn(() => Promise.resolve({ data: {} }))
  };
});

it('should mount', () => {
  const { createRoot } = require("react-dom/client");
  const root = createRoot(document.createElement("div"))
  root.render(<Order orders={[]} />);
  
});
