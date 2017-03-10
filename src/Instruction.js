import React from 'react';
require('./../www/main.css');

class Instruction extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>Instructions</p>
        <p>Fill in the loop to help Sally give her friends cookies.</p>
      </div>
    );
  }
}

export default Instruction;
