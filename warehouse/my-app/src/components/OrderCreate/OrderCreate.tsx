import PartItem from "../PartItem/PartItem";
import React, { Component } from 'react';
import OrderCreateList from "../OrderCreateList/OrderCreateList";
import OrderPartsList from "../OrderPartsList/OrderPartsList";

class OrderCreate extends Component {
  render() {
    return (
      <div style={{display: ' flex', justifyContent: 'space-around', marginTop: '40px', width: '100%'}}>
          <OrderCreateList/>
          <OrderPartsList/>
      </div>
    );
  }
}

export default OrderCreate;
