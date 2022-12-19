import * as React from 'react';
import './OrderList.module.css'
import OrderComponent from '../Order/Order';

interface Order{
  id: number;
  items_count: number;
  date: string;
  title: string;
}

interface Props {
  orders: Order[]
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

  render() {
    return (
      <div>
        {
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Items</th>
                <th>Date</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {this.props.orders.map(order => (
                // Use the Order component to render each individual order
                <OrderComponent key={order.id} id={order.id} items_count={order.items_count} date={order.date} title={order.title} />
              ))}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

export default OrdersList;