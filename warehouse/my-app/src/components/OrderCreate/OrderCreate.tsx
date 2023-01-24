import PartItem from "../PartItem/PartItem";
import React, { Component } from 'react';
import OrderCreateList from "../OrderCreateList/OrderCreateList";
import OrderPartsList from "../OrderPartsList/OrderPartsList";

class OrderCreate extends Component {
  render() {
    return (
      <div>
          <OrderCreateList/>
          <OrderPartsList/>
      </div>
    );
  }
}

export default OrderCreate;
