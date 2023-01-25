import React, { FC } from 'react';
import './Worker.module.css';


interface PersonProps {
  id: Number;
  name : String;
  surname : String;
  telNr : Number;
  email : String;
}

interface PositionProps{
  name :string;
  canCreateClients:boolean;
  canCreateWorkers:boolean;
}

export interface WorkerProps {
  person : PersonProps;
  position : PositionProps;
  salary : Number;
}




const Worker: FC<WorkerProps> = () => (
  <div>
    Worker Component
  </div>
);

export default Worker;
