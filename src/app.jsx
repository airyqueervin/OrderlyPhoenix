import React from 'react';
import Left from './Left.jsx';
import Right from './Right.jsx';

require('./../www/main.css');

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
        < Left />
        < Right />
      </div>
    );
  }
}

export default App;
