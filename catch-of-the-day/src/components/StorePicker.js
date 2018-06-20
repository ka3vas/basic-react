import React from 'react';
import { getFunName } from '../helpers';
// Now its <Fragment> instead of <React.Fragment>
// import React, { Fragment } from 'react';

class StorePicker extends React.Component {
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
        <form action="" className="store-selector">
         <h2>Please Enter a Store</h2>
         <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
         <button type="submit">Visit this Store</button>
        </form> 
      </React.Fragment>
    )
  }
}

export default StorePicker;
