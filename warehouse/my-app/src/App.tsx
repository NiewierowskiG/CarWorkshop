import * as React from 'react';
import OrdersList from "./OrdersList";
import "./App.css"

const orders1 = [
      {
        id: 1,
        items_count: 2,
        date: '2022-01-01',
        title: 'Order #1'
      },
      {
        id: 2,
        items_count: 3,
        date: '2022-01-02',
        title: 'Order #2'
      }
    ];
const orders2 = [
  {
    id: 23478637,
    items_count: 77,
    date: '2021-09-14T15:39:01.319Z',
    title: 'Ergonomic Plastic Chicken'
  },
  {
    id: 84511239,
    items_count: 57,
    date: '2021-09-14T15:39:01.319Z',
    title: 'Handcrafted Frozen Chips'
  },
  {
    id: 58772912,
    items_count: 73,
    date: '2021-09-14T15:39:01.319Z',
    title: 'Small Fresh Car'
  },
  {
    id: 77114799,
    items_count: 83,
    date: '2021-09-14T15:39:01.319Z',
    title: 'Intelligent Soft Soap'
  },
  {
    id: 89627201,
    items_count: 56,
    date: '2021-09-14T15:39:01.319Z',
    title: 'Gorgeous Concrete Towels'
  }
]

interface Props {

}

interface State {
  // State type definition goes here
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // Initial state goes here
    };
  }

  render() {
    return (
      <div>
        <div className="OrdersList">
             <OrdersList orders={orders1}/>
         </div>
          <div className="OrdersList">
             <OrdersList orders={orders2}/>
         </div>
          <div className="OrdersList">
             <OrdersList orders={orders1}/>
         </div>
          <div className="OrdersList">
             <OrdersList orders={orders2}/>
         </div>
      </div>
    );
  }
}

export default App;
