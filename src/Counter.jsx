import React from 'react';
require('./../www/main.css');
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    // return (
    //   <div>
    //   <h1>Hello World!</h1>
    //   </div>
    // )
    return (
      <button
    onClick={() => {
      this.setState({ count: this.state.count + 1 });
    }}
  >
    Count: {this.state.count}
  </button>
  );
  }
}
export default Counter;