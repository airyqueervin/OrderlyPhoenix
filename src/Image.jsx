import React from 'react';
require('./../www/main.css');

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
          <p>Image is here</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/d/df/Franklin_turtle.jpg" />
      </div>
    );
  }
}

export default Image;
