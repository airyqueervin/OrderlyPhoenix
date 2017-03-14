import React from 'react';
require('./../../public/main.css');

class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(props)
  }

  render() {
    return (
      <div>
        <strong><p> Learn </p> </strong>
        <p>{this.props.chapter ? this.props.chapter[0].learnText : null}</p>
      </div>
    );
  }
}

export default Learn;
