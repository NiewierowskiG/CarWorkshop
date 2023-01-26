import * as React from 'react';

import ErrorValidate from './ErrorValidate';

it('should mount', () => {
  const { createRoot } = require("react-dom/client");
  const root = createRoot(document.createElement("div"))
  root.render(<ErrorValidate  error={['Some error message']}/>);
  root.unmount();
});