import React from 'react';
require('./../../public/main.css');

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <strong><p> Challenge Text </p></strong>
        <div dangerouslySetInnerHTML={{__html: this.props.chapter ? this.props.chapter[0].challengeText : null}} />
      </div>
    );
  }
}

export default Challenge;
