import React, { lazy, Suspense } from 'react';

const LazyErrorValidate = lazy(() => import('./ErrorValidate'));

const ErrorValidate = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyErrorValidate error={[]} {...props} />
  </Suspense>
);

export default ErrorValidate;
