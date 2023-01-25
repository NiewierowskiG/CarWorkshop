import React from 'react';
import './Crud.module.css';
import { OrderProps } from '../Order/OrderProps';
import axios from 'axios';
import {ItemProps} from "../Item/ItemProps";

const AUTH_TOKEN = "Token e19d08dda86eb3c838271ccab74b59f029dc94e3"

interface CrudProps {
  order: OrderProps;
  item: ItemProps;
}


const Crud: React.FunctionComponent<CrudProps> = ({ order  }) => {
  const handleSubmitOrder = async () => {
    try {
      console.log(order);
      axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
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
