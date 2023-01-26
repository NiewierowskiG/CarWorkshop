import React, {useEffect, useState} from 'react';
import {OrderListProps, OrderProps} from "../Order/OrderProps";
import {fetchItems, fetchOrders, putOrder} from "../Services/services";


const Order: React.FC<OrderListProps> = ({orders: initialOrders}) => {
    const [orders, setOrders] = useState<OrderProps[]>([]);
    const handleStatusChange = (id: number) => {
        const updatedOrders = orders.map(order => {
            if (order.id === id) {

                putOrder(order)
                return {...order, status: "done"}

            }
            return order
        });
        setOrders(updatedOrders)
    };
    useEffect(() => {
        fetchOrders().then((data) => {
            setOrders(data);
        });
    }, [])
    return (
        <div style={{display: 'flex', marginLeft: '5%', marginRight: '5%', marginTop: '50px'}}>
            <table style={{width: "70%"}}>
                <thead>
                <tr>
                    <th>ID:</th>
                    <th>Data:</th>
                    <th>Tytuł:</th>
                    <th>Status:</th>
                    <th>Przedmioty:</th>
                    <th>Suma:</th>
                    <th>Zmień status:</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.title}</td>
                        <td>{order.status !== "" ? order.status : 'in progress'}</td>
                        <td>{order.itemNames}sdsdasdadsa</td>
                        <td>{order.sum}</td>
                        <td>
                            <button onClick={() => handleStatusChange(order.id)}>Done</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Order;


// import * as React from 'react';
// import './OrderList.module.css'
// import Order from '../Order/Order';
// import OrderAdd from '../OrderAdd/OrderAdd';
// import { OrderProps } from '../Order/OrderProps';


// interface Props {
//   orders: OrderProps[]
//   onOrderFromList: (order: OrderProps) => void;
//   idsList: number[]

// }

// interface State {
//   // State type definition goes here
// }


// class OrdersList extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//     };
//   }

//   handleOrderFromAdd = (data:OrderProps) => {
//     this.props.onOrderFromList({...data});
//   }

//   render() {
//     return (
//       <div>
//         <OrderAdd onOrderFromAdd={this.handleOrderFromAdd} idsList={this.props.idsList}/>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Date</th>
//               <th>Title</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.orders.map(order => (
//               // Use the Order component to render each individual order
//               <Order key={order.id} id={order.id} date={order.date} title={order.title} status={''} worker={order.worker}  />
//             ))}
//           </tbody>
//         </table>

//       </div>
//     );
//   }
// }

// export default OrdersList;