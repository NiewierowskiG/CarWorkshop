import PartItem from "../PartItem/PartItem";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class OrderPartsList extends Component {
  onEnd = (result: string): void =>{
    console.log(result)
  }
  render() {
    return (

      <table className="table" style={{borderBottom: "1px solid black", borderCollapse: "collapse", width: "40%"}}>
      <tr className="thead-dark">
        <th style={{width:"200px", height: '50px',borderBottom: "1px solid black"}}>ID:</th>
        <th style={{width:"200px", height: '50px',borderBottom: "1px solid black",}}>Name:</th>
        <th style={{width:"200px", height: '50px',borderBottom: "1px solid black",}}>Price:</th>
        <th style={{width:"200px", height: '50px',borderBottom: "1px solid black",}}>Amount:</th>
      </tr>
            <PartItem id = {11} name="Apple" price={1.99} amount={5} />
            <PartItem id = {12} name="Orange" price={2.99} amount={3} />
            <PartItem id = {13} name="Orange" price={2.99} amount={3} />
            <PartItem id = {14} name="Orange" price={2.99} amount={3} />
            <PartItem id = {15} name="Orange" price={2.99} amount={3} />
            <PartItem id = {16} name="Orange" price={2.99} amount={3} />
            <PartItem id = {17} name="Orange" price={2.99} amount={3} />
            <PartItem id = {18} name="Orange" price={2.99} amount={3} />
            <PartItem id = {19} name="Orange" price={2.99} amount={3} />
            <PartItem id = {20} name="Orange" price={2.99} amount={3} />
            <PartItem id = {21} name="Orange" price={2.99} amount={3} />
            <PartItem id = {22} name="Orange" price={2.99} amount={3} />
      </table>
   
  )};
}

export default OrderPartsList;