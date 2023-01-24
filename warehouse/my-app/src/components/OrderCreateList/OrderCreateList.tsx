import PartItem from "../PartItem/PartItem";
import React, { Component } from 'react';

class OrderCreateList extends Component {
  render() {
    return (
      <table style={{border: "1px solid black", borderCollapse: "collapse", width: "40%"}}>
        <tr>
          <th style={{width:"200px", height: '50px'}}>ID:sss</th>
          <th style={{width:"200px", height: '50px'}}>Name:</th>
          <th style={{width:"200px", height: '50px'}}>Price:</th>
          <th style={{width:"200px", height: '50px'}}>Amount:</th>
        </tr>
      <PartItem id = {1} name="Apple" price={1.99} amount={5} />
      <PartItem id = {2} name="Orange" price={2.99} amount={3} />
      <PartItem id = {3} name="Orange" price={2.99} amount={3} />
      <PartItem id = {4} name="Orange" price={2.99} amount={3} />
      <PartItem id = {5} name="Orange" price={2.99} amount={3} />
      <PartItem id = {6} name="Orange" price={2.99} amount={3} />
      <PartItem id = {7} name="Orange" price={2.99} amount={3} />
      <PartItem id = {8} name="Orange" price={2.99} amount={3} />
      <PartItem id = {9} name="Orange" price={2.99} amount={3} />
      <PartItem id = {10} name="Orange" price={2.99} amount={3} />
      </table>
    );
  }
}

export default OrderCreateList;
