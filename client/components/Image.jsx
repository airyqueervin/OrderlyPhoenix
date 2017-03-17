import React from 'react';
require('./../../public/main.css');

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default Image;

