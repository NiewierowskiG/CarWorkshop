import React, { lazy, Suspense } from 'react';

const LazyOrder = lazy(() => import('./Order'));

const Order = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOrder id={0} items_count={0} date={''} title={''} {...props} />
  </Suspense>
);

export default Order;
