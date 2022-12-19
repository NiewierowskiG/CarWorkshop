import React, { lazy, Suspense } from 'react';

const LazyOrder = lazy(() => import('./Order'));

const Order = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOrder {...props} />
  </Suspense>
);

export default Order;
