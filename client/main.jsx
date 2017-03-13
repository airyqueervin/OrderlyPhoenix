import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
require('./../public/main.css');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Codr</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
