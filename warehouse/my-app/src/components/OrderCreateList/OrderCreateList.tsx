import PartItem from "../PartItem/PartItem";
import React, {useState} from "react";
import { ItemType } from "../types/ItemTypes";
import "./OrderCreateList.css"
import {postWithPayload} from "../Services/services";
import {OrderPost} from "../types/OrderPost";
type OrderCreateListProps = {
  order: ItemType[];
};



const OrderCreateList: React.FC<OrderCreateListProps> = ({ order }) => {
    //console.log(order)
    const [name, setName] = useState('');
    const [status, setStatus] = useState('in progress');
    const handleButtonClick = () => {
      if(!name){
        alert('Musisz dodać nazwę zamówienia!')
        return;
      }
      setStatus('in progress');
        const postOrder: OrderPost = {
            order: order,
            name: name,
            status: status,
        }
        postWithPayload(postOrder, 'orders')
    };
  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            <tr>
              <th style={{ width: "200px", height: "50px", textAlign: 'center', border: '2px solid black', backgroundColor: 'lightgrey' }}>Nr. ID:</th>
              <th style={{ width: "200px", height: "50px", textAlign: 'center', border: '2px solid black', backgroundColor: 'lightgrey' }}>Nazwa części:</th>
              <th style={{ width: "200px", height: "50px", textAlign: 'center', border: '2px solid black', backgroundColor: 'lightgrey' }}>Cena (1 sztuka) :</th>
              <th style={{ width: "200px", height: "50px", textAlign: 'center', border: '2px solid black', backgroundColor: 'lightgrey' }}>Ilość:</th>
              <th style={{ width: "200px", height: "50px", textAlign: 'center', border: '2px solid black', backgroundColor: 'lightgrey' }}>Całkowita cena:</th>
            </tr>
            {order.map((item) => (
              <PartItem
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                cost={item.price * item.amount} />
            ))}
          </tbody>
        </table>
      </div>
      <input style={{ width: "500px", marginTop: '30px', height: '40px'}}type="text" placeholder="Dodaj nazwę (np. ZAM26012023)" value={name} onChange={(e) => setName(e.target.value)} />
      <button style={{display: 'inline', marginLeft:'20px', height: '40px', width:'50px'}}onClick={handleButtonClick}>add</button>
    </div>
  );
};

export default OrderCreateList;
