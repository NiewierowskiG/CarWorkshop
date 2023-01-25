import React, { Component } from "react";
import { ItemType } from "../types/ItemTypes";

interface PartItemProps {
  id: number;
  name: string;
  price: number;
  amount: number;
  cost: number;
  onClick?: (item: ItemType) => void;
}

const PartItem: React.FC<PartItemProps> = ({
  id,
  name,
  price,
  amount,
  cost,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      const item: ItemType = {
        id,
        name,
        price,
        amount,
        cost,
      };
      onClick(item);
    }
  };

  return (
    <tr className= "content" onClick={handleClick}>
      <td
        style={{
          width: "200px",
          height: "50px",
          border: "1px solid black",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        {id}
      </td>
      <td
        style={{
          width: "200px",
          height: "50px",
          border: "1px solid black",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        {name}
      </td>
      <td
        style={{
          width: "200px",
          height: "50px",
          border: "1px solid black",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        {price}
      </td>
      <td
        style={{
          width: "200px",
          height: "50px",
          border: "1px solid black",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        {amount}
      </td>
      <td
        style={{
          width: "200px",
          height: "50px",
          border: "1px solid black",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        {cost}
      </td>
    </tr>
  );
};

export default PartItem;
