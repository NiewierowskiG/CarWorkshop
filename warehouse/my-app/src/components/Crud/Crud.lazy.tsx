import React, { lazy, Suspense } from 'react';

const LazyCrud = lazy(() => import('./Crud'));

const Crud = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCrud prop={{id:0, date:'', title:'', status:'', itemNames: '', sum:0}} {...props} propType={'order'}/>
  </Suspense>
);

export default Crud;
