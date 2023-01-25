import PartItem from "../PartItem/PartItem";
import React, { Component } from "react";
import { ItemType } from "../types/ItemTypes";

type OrderCreateListProps = {
  order: ItemType[];
};

const OrderCreateList: React.FC<OrderCreateListProps> = ({ order }) => {
  return (
    <table
      style={{
        border: "1px solid black",
        borderCollapse: "collapse",
        width: "40%",
      }}
    >
      <tr>
        <th style={{ width: "200px", height: "50px" }}>ID:sss</th>
        <th style={{ width: "200px", height: "50px" }}>Name:</th>
        <th style={{ width: "200px", height: "50px" }}>Price:</th>
        <th style={{ width: "200px", height: "50px" }}>Amount:</th>
      </tr>
      {order.map((item) => (
        <PartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      ))}
      ;
    </table>
  );
};

export default OrderCreateList;
