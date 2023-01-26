

export interface OrderProps {
  id: number;
  date: string;
  title: string;
  status: string;
  itemNames: string;
  sum: number;
}
export interface OrderListProps {
  orders: OrderProps[];
}