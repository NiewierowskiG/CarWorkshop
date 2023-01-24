import React, { Component } from 'react';

interface PartItemProps {
    name: string;
    price: number;
    amount: number;
}

class PartItem extends Component<PartItemProps> {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Price: {this.props.price}</p>
        <p>Amount: {this.props.amount}</p>
      </div>
    );
  }
}

export default PartItem;