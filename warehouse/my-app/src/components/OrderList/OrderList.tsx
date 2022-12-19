import * as React from 'react';
import './OrdersList.module.css'

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
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.items_count}</td>
              <td>{order.date}</td>
              <td>{order.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
          }
      </div>
    );
  }
}

export default OrdersList;