import React from 'react';
require('./../../public/main.css');

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitText: 'bullshit'
    };
    this.updateChallenge = this.updateChallenge.bind(this);
    this.splitChallengeText = this.splitChallengeText.bind(this);
    this.splitChallengeText();
  }

  updateChallenge(e) {
    console.log('I CHANGED', e.target.value);
    this.setState({challengeTex: e.target.value});
  }

  splitChallengeText() { 
    this.setState({
      splitText: this.props.chapter[0].challengeText
    });
  }

  // componentWillMount() {
  //   this.setState({
  //     splitText: this.props.chapter[0].challengeText
  //   });
  // }

  // joinChallengeText() {

  // }
  

  render() {
    return (
      <div>
        <strong><p> Challenge Text </p></strong>
        <input onChange={this.updateChallenge} type="text" placeholder="Some text to fill in"/>
        <div dangerouslySetInnerHTML={{__html: this.props.chapter ? this.props.chapter[0].challengeText : null}} />
      </div>
    );
  }
}

export default Challenge;
