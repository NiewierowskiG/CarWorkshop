import PartItem from "../PartItem/PartItem";
import React, { Component, useState } from "react";
import OrderCreateList from "../OrderCreateList/OrderCreateList";
import OrderPartsList from "../OrderPartsList/OrderPartsList";
import { ItemType } from "../types/ItemTypes";
import {ItemListProps, ItemProps} from "../Item/ItemProps";

const OrderCreate: React.FC<ItemListProps> = ({items: initialItems}) => {
  const [items, setItems] = useState<ItemProps[]>(initialItems);
  const [order, setOrder] = useState<ItemType[]>([]);
  console.log(order);
  return (
    <div
      style={{
        display: " flex",
        justifyContent: "space-around",
        marginTop: "40px",
        width: "100%",
      }}
    >
      <OrderPartsList items={items} order={order} onSetOrder={setOrder} />
      <OrderCreateList  order={order} />
    </div>
  );
};

export default OrderCreate;
