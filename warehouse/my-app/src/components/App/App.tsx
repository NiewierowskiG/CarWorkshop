import * as React from 'react';
import OrdersList from '../OrderList/OrderList';
import "./App.module.css"
import { OrderProps } from '../Order/OrderProps';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import OrderCreate from "../OrderCreate/OrderCreate";
import Item from '../Item/Item';
import axios from 'axios';

const AUTH_TOKEN = "Token e5d65aad6b4f0e8c19bb0870bbbc01b6048db93a"

interface Props {

}

interface State {
  orders:OrderProps[];
  idsList: number[];
}

class App extends React.Component<Props, State> {
  intervalId: NodeJS.Timer | undefined;
  constructor(props: Props) {
    super(props);
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    this.state = {
      orders:[],
      idsList: []
    };
  }
  componentDidMount() {
    this.fetchOrders();
    this.intervalId = setInterval(() => this.fetchOrders(), 5000);
}



fetchOrders() {
    axios.get("http://localhost:8000/orders/")
        .then(response => {
            return this.setState({
                orders: response.data
            });
            
        })
        .catch(error => {
            console.log(error);
        });
}


  handleOrderFromList = (data: OrderProps) => {
    this.setState((state) => {
      return {
        orders: [...state.orders, data],
        idsList: [...state.idsList, data.id]
      };
    });
    /*setTimeout(() => {
      console.log("eo", this.state.idsList)
    }, 1000);*/
  }

  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <h1>Main page</h1>
          <Route path='/Orders'>
            <OrderCreate/>
          </Route>
          <Route>
            <Item/>
          </Route>
       </div>
      </Router>
    );
  }
}

export default App;
