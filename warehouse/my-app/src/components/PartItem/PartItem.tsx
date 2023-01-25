import React, { Component } from 'react';

interface PartItemProps {
    id: number;
    name: string;
    price: number;
    amount: number;
}

class PartItem extends Component<PartItemProps> {
  render() {
    return (
        <tr>
          <td style={{width: '200px', height: '50px', borderBottom: "1px solid black", borderCollapse: "collapse",textAlign: 'center'}}>{this.props.id}</td>
          <td style={{width: '200px', height: '50px', borderBottom: "1px solid black", borderCollapse: "collapse",textAlign: 'center'}}>{this.props.name}</td>
          <td style={{width: '200px', height: '50px', borderBottom: "1px solid black", borderCollapse: "collapse",textAlign: 'center'}}>{this.props.price}</td>
          <td style={{width: '200px', height: '50px', borderBottom: "1px solid black", borderCollapse: "collapse",textAlign: 'center'}}>{this.props.amount}</td>
        </tr>
    );
  }
}

export default PartItem;