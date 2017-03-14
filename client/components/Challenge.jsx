import React from 'react';
require('./../../public/main.css');

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('props:',  props);
    // console.log(this.state)
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
        {this.props.chapter ? this.props.chapter[0].challengeText : null}
      </div>
    );
  }
}

export default Challenge;
