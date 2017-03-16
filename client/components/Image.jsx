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
        <img src={this.props.chapter[0].firstImage} />
        <br></br>
        <img src={this.props.chapter[0].secondImage} />
      </div>
    );
  }
}

export default Image;
