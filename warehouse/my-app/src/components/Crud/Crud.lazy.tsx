import React, { lazy, Suspense } from 'react';

const LazyCrud = lazy(() => import('./Crud'));

const Crud = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCrud prop={{id:0, worker : { person :{id:0, name:"", surname:'', telNr:0, email:''}, position:{name:"",canCreateClients:false,canCreateWorkers:false}, salary:0}, date:'', title:'', status:''}} {...props} propType={'order'}/>
  </Suspense>
);

export default Crud;
