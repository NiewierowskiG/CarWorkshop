import React, { lazy, Suspense } from 'react';

const LazyOrderList = lazy(() => import('./OrderList'));

const OrderList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOrderList orders={[]} {...props} />
  </Suspense>
);

export default OrderList;
