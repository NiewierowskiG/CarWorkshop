import React, { lazy, Suspense } from 'react';

const LazyWorker = lazy(() => import('./Worker'));

const Worker = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWorker person={{id:0, name:"", surname:'', telNr:0, email:''}} position={{name:"",canCreateClients:false,canCreateWorkers:false}} salary={0}  {...props} />
  </Suspense>
);

export default Worker;
