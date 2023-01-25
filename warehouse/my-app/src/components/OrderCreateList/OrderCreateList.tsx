import PartItem from "../PartItem/PartItem";
import React, { Component } from "react";
import { ItemType } from "../types/ItemTypes";
import "./OrderCreateList.css"
type OrderCreateListProps = {
  order: ItemType[];
};

const OrderCreateList: React.FC<OrderCreateListProps> = ({ order }) => {
  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <table
          style={{
            border: "1px solid black",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <tr>
            <th style={{ width: "200px", height: "50px", textAlign:'center', border: '2px solid black', backgroundColor: 'lightgrey'}}>Nr. ID:</th>
            <th style={{ width: "200px", height: "50px", textAlign:'center', border: '2px solid black', backgroundColor: 'lightgrey'}}>Nazwa zamówienia:</th>
            <th style={{ width: "200px", height: "50px", textAlign:'center', border: '2px solid black', backgroundColor: 'lightgrey'}}>Cena (1 sztuka) :</th>
            <th style={{ width: "200px", height: "50px", textAlign:'center', border: '2px solid black', backgroundColor: 'lightgrey'}}>Ilość:</th>
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
        </table>
      </div>
    </div>
  );
};

export default OrderCreateList;
