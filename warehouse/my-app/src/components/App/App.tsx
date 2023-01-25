import * as React from 'react';
import OrdersList from '../OrderList/OrderList';
import "./App.module.css"
import { OrderProps } from '../Order/OrderProps';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import OrderPartsList from "../OrderPartsList/OrderPartsList";
import OrderCreate from "../OrderCreate/OrderCreate";
interface Props {

}

interface State {
  orders1: OrderProps[];
  orders2: OrderProps[];
  idsList: number[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      orders1: [ 
        {
          id: 1,
          worker:{ 
            person : {
              id:0, 
              name:"", 
              surname:'', 
              telNr:0, 
              email:''
            },
            position:{
              name:"",
              canCreateClients:false,
              canCreateWorkers:false
            }, 
            salary:0,
          },
          date: '2022-01-01',
          title: 'Order #1',
          status: 'done'
        },
        {
          id: 2,
          worker:{ 
            person : {
              id:0, 
              name:"", 
              surname:'', 
              telNr:0, 
              email:''
            },
            position:{
              name:"",
              canCreateClients:false,
              canCreateWorkers:false
            }, 
            salary:0,
          },
          date: '2022-01-02',
          title: 'Order #2',
          status: 'done'
        }
      ],
      orders2: [
        {
          id: 23478637,
          worker:{ 
            person : {
              id:0, 
              name:"", 
              surname:'', 
              telNr:0, 
              email:''
            },
            position:{
              name:"",
              canCreateClients:false,
              canCreateWorkers:false
            }, 
            salary:0,
          },
          date: '2021-09-14T15:39:01.319Z',
          title: 'Ergonomic Plastic Chicken',
          status: 'undone'
        },
        {
          id: 84511239,
          worker:{ 
            person : {
              id:0, 
              name:"", 
              surname:'', 
              telNr:0, 
              email:''
            },
            position:{
              name:"",
              canCreateClients:false,
              canCreateWorkers:false
            }, 
            salary:0,
          },
          date: '2021-09-14T15:39:01.319Z',
          title: 'Handcrafted Frozen Chips',
          status: 'undone'
        },
        {
          id: 58772912,
          worker:{ 
            person : {
              id:0, 
              name:"", 
              surname:'', 
              telNr:0, 
              email:''
            },
            position:{
              name:"",
              canCreateClients:false,
              canCreateWorkers:false
            }, 
            salary:0,
          },
          date: '2021-09-14T15:39:01.319Z',
          title: 'Small Fresh Car',
          status: 'undone'
        },
        {
          id: 77114799,
          worker:{ 
            person : {
              id:0, 
              name:"", 
              surname:'', 
              telNr:0, 
              email:''
            },
            position:{
              name:"",
              canCreateClients:false,
              canCreateWorkers:false
            }, 
            salary:0,
          },

          date: '2021-09-14T15:39:01.319Z',
          title: 'Intelligent Soft Soap',
          status: 'undone'
        },
        {
          id: 89627201,
          worker:{ 
            person : {
              id:0, 
              name:"", 
              surname:'', 
              telNr:0, 
              email:''
            },
            position:{
              name:"",
              canCreateClients:false,
              canCreateWorkers:false
            }, 
            salary:0,
          },
          date: '2021-09-14T15:39:01.319Z',
          title: 'Gorgeous Concrete Towels',
          status: 'undone'
        }
      ],
      idsList: []
    };
  }
  componentDidMount() {
    this.setState((state) => {
      return { idsList: this.state.orders1.map(order => order.id) };
    }, () => {
      console.log('State updated!', this.state.idsList);
    });
  }


  handleOrderFromList = (data: OrderProps) => {
    this.setState((state) => {
      return {
        orders1: [...state.orders1, data],
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
            <OrdersList orders={this.state.orders2} idsList={this.state.idsList} onOrderFromList={this.handleOrderFromList}/>
          </Route>
        </div>
      </Router>
      // <div>
      //   <OrderCreate/>
      // </div>
    );
  }
}

export default App;
