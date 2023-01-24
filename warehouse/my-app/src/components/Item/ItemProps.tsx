export interface ItemProps {
  id: number;
  name: string;
  price: number;
  amount: number;
}
export interface ItemListProps {
  items: ItemProps[];
}