import React from 'react';
require('./../../public/main.css');

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateChallenge = this.updateChallenge.bind(this);
  }

  updateChallenge(e) {
    this.setState({
      challenge: e.target.value
    });
  }

  render() {
    return (
      <div>
        <p> Challenge </p>
      </div>
    );
  }
}

export default Challenge;
