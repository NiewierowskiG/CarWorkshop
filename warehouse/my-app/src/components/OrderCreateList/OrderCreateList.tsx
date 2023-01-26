import PartItem from "../PartItem/PartItem";
import React, { Component } from "react";
import { ItemType } from "../types/ItemTypes";
import "./OrderCreateList.css"
import {postWithPayload} from "../Services/services";
import {OrderPost} from "../types/OrderPost";
type OrderCreateListProps = {
  order: ItemType[];
};



const OrderCreateList: React.FC<OrderCreateListProps> = ({ order }) => {
    console.log(order)
    const handleButtonClick = () => {
        const postOrder: OrderPost = {
            order: order,
            name: 'eo'
        }
        postWithPayload(postOrder, 'orders')
    };
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
            <th style={{ width: "200px", height: "50px", textAlign:'center', border: '2px solid black', backgroundColor: 'lightgrey'}}>Nazwa części:</th>
            <th style={{ width: "200px", height: "50px", textAlign:'center', border: '2px solid black', backgroundColor: 'lightgrey'}}>Cena (1 sztuka) :</th>
            <th style={{ width: "200px", height: "50px", textAlign:'center', border: '2px solid black', backgroundColor: 'lightgrey'}}>Ilość:</th>
            <th style={{ width: "200px", height: "50px", textAlign:'center', border: '2px solid black', backgroundColor: 'lightgrey'}}>Całkowita cena:</th>
          </tr>
          {order.map((item) => (
            <PartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              cost = {item.price * item.amount}
            />
          ))}
        </table>
      </div>
      <button onClick={handleButtonClick}>add</button>
    </div>
  );
};

export default OrderCreateList;
