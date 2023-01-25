import { WorkerProps } from "../Worker/Worker";

export interface OrderProps {
  id: number;
  worker : WorkerProps;
  date: string;
  title: string;
  status: string;
}
