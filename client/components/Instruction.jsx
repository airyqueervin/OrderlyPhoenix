import React from 'react';
require('./../../public/main.css');

class Instruction extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <strong><p> Instructions </p></strong>
        <p>{this.props.chapter ? this.props.chapter[0].instructionText : null}</p>
      </div>
    );
  }
}

export default Instruction;
