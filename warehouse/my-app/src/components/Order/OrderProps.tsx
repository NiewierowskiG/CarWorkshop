
export interface OrderProps {
  name: number;
  date : Date;
  content: string;
  cost: string;
}
export interface OrderListProps {
  orders: OrderProps[];
}