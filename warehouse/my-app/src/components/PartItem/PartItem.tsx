import React, { Component } from 'react';

interface PartItemProps {
    name: string;
    price: number;
    amount: number;
}

class PartItem extends Component<PartItemProps> {
  render() {
    return (
      <div style={{borderBottom: '1px solid black'}}>
        <p>Name: {this.props.name}</p>
        <p>Price: {this.props.price}</p>
        <p>Amount: {this.props.amount}</p>
      </div>
    );
  }
}

export default PartItem;