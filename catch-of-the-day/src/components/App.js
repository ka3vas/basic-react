import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount () {
    // sync it with the name of the store 
    const { params } = this.props.match; 

    // // first reinstate our lockal storage
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  
  componentDidUpdate () {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount () {
    // remove liestening to prevent memory leak
    base.removeBinding(this.ref)
  }


  addFish = fish => {
    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes
    });
  }

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  }

  deleteFishFromOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove order or update the number
    delete order[key];
    // 3. update state with setState
    // this.setState({ order: order });
    this.setState({ order });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = key => {
    // Manual test in console
    // $r.addToOrder("fish1")

    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. add order or update the number
    order[key] = order[key] + 1 || 1;
    // 3. update state with setState
    // this.setState({ order: order });
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={30} cool={true} />
          <ul className="fishes">
             {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)} 
          </ul>
        </div>
        <Order fishes={this.state.fishes} deleteFishFromOrder={this.deleteFishFromOrder} order={this.state.order} />
        <Inventory 
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
