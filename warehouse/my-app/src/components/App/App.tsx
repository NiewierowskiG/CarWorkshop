import * as React from 'react';
import OrderList from '../OrderList/OrderList';
import "./App.module.css"
import {OrderProps} from '../Order/OrderProps';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import OrderCreate from "../OrderCreate/OrderCreate";
import {ItemProps} from "../Item/ItemProps";
import ItemList from "../ItemList/ItemList";
import {AUTH_TOKEN} from "../Config/Config";
import axios,{ AxiosError } from 'axios';
import {fetchItems, fetchOrders} from "../Services/services";

interface Props {

}

interface State {
    orders: OrderProps[];
    idsList: number[];
    items: ItemProps[];
}

class App extends React.Component<Props, State> {
    intervalId: NodeJS.Timer | undefined;
    constructor(props: Props) {
        super(props);
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        this.state = {
            items: [],
            orders: [],
            idsList: []
        };
    }

    componentDidMount() {
        fetchOrders().then((data) => {
            this.setState({
                orders: data
            });
        });
        fetchItems().then((data) => {
            this.setState({
                items: data
            });
        });
        this.intervalId = setInterval(() => fetchOrders().then((data) => {
            this.setState({
                orders: data
            });
        }), 5000);
        this.intervalId = setInterval(() => fetchItems().then((data) => {
            this.setState({
                items: data
            });
        }), 5000);
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
                <Navbar/>
                <Route path='/Orders'>
                    <OrderList orders={this.state.orders}/>
                </Route>
                <Route path='/AddOrders'>
                    <OrderCreate items={this.state.items}/>
                </Route>
                <Route path='/Item'>
                    <ItemList items={this.state.items}/>;
                </Route>
            </Router>
        )
    }
}

export default App;
