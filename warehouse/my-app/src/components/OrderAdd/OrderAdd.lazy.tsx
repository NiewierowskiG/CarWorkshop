import React, { lazy, Suspense } from 'react';

const LazyOrderAdd = lazy(() => import('./OrderAdd'));

const OrderAdd = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOrderAdd {...props} />
  </Suspense>
);

export default OrderAdd;
