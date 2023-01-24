import PartItem from "../PartItem/PartItem";
import React, { Component } from 'react';

class OrderPartsList extends Component {
  render() {
    return (
      <div style={{border: "4px solid black"}}>
        <PartItem name="Apple" price={1.99} amount={5} />
        <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />
      <PartItem name="Orange" price={2.99} amount={3} />

      </div>
    );
  }
}

export default OrderPartsList;