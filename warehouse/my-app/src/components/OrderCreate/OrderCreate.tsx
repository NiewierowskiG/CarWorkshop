import PartItem from "../PartItem/PartItem";
import React, { Component, useState } from "react";
import OrderCreateList from "../OrderCreateList/OrderCreateList";
import OrderPartsList from "../OrderPartsList/OrderPartsList";
import { ItemType } from "../types/ItemTypes";

const OrderCreate: React.FC = () => {
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
      <OrderCreateList order={order} />
      <OrderPartsList order={order} onSetOrder={setOrder} />
    </div>
  );
};

export default OrderCreate;
