import React from 'react';
require('./../../public/main.css');

import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome to Codr</h1>
        <button><Link to="/play">Play</Link></button>
        <button><Link to="/about">About</Link></button>
        {this.props.children}
      </div>
    );
  }
}

export default App;
