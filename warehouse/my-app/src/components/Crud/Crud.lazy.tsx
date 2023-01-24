import React, { lazy, Suspense } from 'react';

const LazyCrud = lazy(() => import('../Crud/Crud'));

const Crud = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCrud order={{id:0, items_count:0, date:'', title:'', status:''}} {...props} />
  </Suspense>
);

export default Crud;
