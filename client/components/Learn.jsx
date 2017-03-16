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
    console.log('LEANR PROPS: ', this.props);
    return (
      <div>
        <strong><p> Learn </p> </strong>
        <p></p>
      </div>
    );
  }
}

export default Learn;
