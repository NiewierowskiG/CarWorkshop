import * as React from 'react';
import './OrderList.module.css'
import Order from '../Order/Order';
import OrderAdd from '../OrderAdd/OrderAdd';
import { OrderProps } from '../Order/OrderProps';


interface Props {
  orders: OrderProps[]
  onOrderFromList: (order: OrderProps) => void;
  idsList: number[]

}

interface State {
  // State type definition goes here
}



class OrdersList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  handleOrderFromAdd = (data:OrderProps) => {
    this.props.onOrderFromList({...data});
  }

  render() {
    return (
      <div>
        <OrderAdd onOrderFromAdd={this.handleOrderFromAdd} idsList={this.props.idsList}/>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {this.props.orders.map(order => (
              // Use the Order component to render each individual order
              <Order key={order.id} id={order.id} date={order.date} title={order.title} status={''} worker={order.worker}  />
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default OrdersList;