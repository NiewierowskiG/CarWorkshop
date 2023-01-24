<<<<<<< HEAD
import React, { Component } from 'react'

export class Crud extends Component {
  render() {
    return (
      <div>Crud</div>
    )
  }
}

export default Crud
=======
import React from 'react';
import './Crud.module.css';
import { OrderProps } from '../Order/OrderProps';
import axios from 'axios';

interface CrudProps {
  order: OrderProps;

}


const Crud: React.FunctionComponent<CrudProps> = ({ order }) => {
  const handleSubmitOrder = async () => {
    try {
      await axios.post('http://localhost:8000/orders/', order);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button type="submit" onClick={handleSubmitOrder}>
      Submit
    </button>
  );
}


export default Crud;
>>>>>>> 85f3018c7833003f26aa52c042aeb74e212ba409
