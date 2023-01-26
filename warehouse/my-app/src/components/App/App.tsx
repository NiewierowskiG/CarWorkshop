import * as React from 'react';
import "./App.module.css"
import {OrderProps} from '../Order/OrderProps';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import OrderCreate from "../OrderCreate/OrderCreate";
import {ItemProps} from "../Item/ItemProps";
import ItemList from "../ItemList/ItemList";
import {AUTH_TOKEN} from "../Config/Config";
import axios,{ AxiosError } from 'axios';



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
        this.fetchOrders();
        this.fetchItems()
        this.intervalId = setInterval(() => this.fetchOrders(), 5000);
        this.intervalId = setInterval(() => this.fetchItems(), 5000);
    }


    fetchOrders() {
        axios.get("http://localhost:8000/orders/")
            .then((response: { data: OrderProps[]; }) => {
                return this.setState({
                    orders: response.data
                });

            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
        //console.log(this.state.orders)
    }


    fetchItems() {
        axios.get("http://localhost:8000/items/")
            .then((response: { data: ItemProps[]; }) => {
                return this.setState({
                    items: response.data
                });

            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
        //console.log(this.state.items)
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

                        </Route>
                        <Route path='/AddOrders'>
                            <OrderCreate items={this.state.items} />
                        </Route>
                        <Route path='/Item'>
                            <ItemList items={this.state.items} />;
                        </Route>
            </Router>
        )
    }
}

export default App;
