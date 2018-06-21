import React from 'react';
import { getFunName } from '../helpers';
// Now its <Fragment> instead of <React.Fragment>
// import React, { Fragment } from 'react';

class StorePicker extends React.Component {
  // constructor () {
  //   super();
  //   // this is now equal to the instance of this component
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  // handleClick () {
  //   alert('hey!');
  // }

  // goToStore (e) {
  //   // 1. Stop form from submitting
  //   e.preventDefault();
  //   console.log("Going to store!");
  //   // 2. Get the value of input
  //   console.log(this.myInput);
  //   // 3. Change the page to /store/inputValue
  // }

  // goToStore is now a property
  goToStore = (e) => {
    // 1. Stop form from submitting
    e.preventDefault();
    // 2. Get the value of input
    const storeName = this.myInput.value.value;
    // 3. Change the page to /store/inputValue
    this.props.history.push(`/store/${storeName}`);
  }

  render () {
    // return <p>I am the Store Picker!</p>

    // return React.createElement('p', {className: 'Hi'}, 'Heeeey');

    //return <form action="" className="store__selector"></form> 

    // return (
    //   <form action="" className="store__selector">
    //     <h2>Please Enter a Store</h2>
    //   </form> 
    // )

    return (
      <React.Fragment>
        { /* JSX Comment */ }
        <form action="" className="store-selector" onSubmit={this.goToStore}>
         <h2>Please Enter a Store</h2>
         {/* <button onClick={this.handleClick}>Click me!</button> */}
         <input 
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
         <button type="submit">Visit this Store</button>
        </form> 
      </React.Fragment>
    )
  }
}

export default StorePicker;
