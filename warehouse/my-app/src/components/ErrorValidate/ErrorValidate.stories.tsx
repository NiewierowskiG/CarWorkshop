/* eslint-disable */
import ErrorValidate from './ErrorValidate';
import * as React from 'react';

export default {
  title: "ErrorValidate",
};

export const Default = () => <ErrorValidate error={['Some error message']} />;

Default.story = {
  name: 'default',
};
