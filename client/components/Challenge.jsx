import React from 'react';
require('./../../public/main.css');

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitText: 'bullshit'
    };
    this.updateChallenge = this.updateChallenge.bind(this);
    // this.splitChallengeText = this.splitChallengeText.bind(this);
    // this.splitChallengeText();
  }

  updateChallenge(e) {
    console.log('I CHANGED', e.target.value);
    this.setState({challengeTex: e.target.value});
  }


  // componentDidMount() {
  //   // const challengeText = this.props.chapter ? this.props.chapter[0].challengeText : null;
  //   const challengeText = this.props.chapter[0].challengeText;
  //   console.log('CHALLENGE TEXT: ', challengeText);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps[0].challengeText) {

  //   // const challengeText = this.props.chapter ? this.props.chapter[0].challengeText : null;
  //   const challengeText = this.props.chapter[0].challengeText;
  //     console.log('CHALLENGE TEXT: ', challengeText);
  //   }
  // }


// if(this.isMounted()) {
//   this.setState({

//   })
// }




  // componentWillMount() {
  //   this.setState({
  //     splitText: this.props.chapter[0].challengeText
  //   });
  // }

  // joinChallengeText() {

  // }
  

  render() {
    // if (!this.props.chapter[0].challengeText) {
    //   console.log('waiting')
    //   return <div>Loading</div>
    // }

    return (
      <div>
        <strong><p> Challenge Text </p></strong>
        <input onChange={this.updateChallenge} type="text" placeholder="Some text to fill in"/>
        <div dangerouslySetInnerHTML={{__html: this.props.chapter[0].challengeText}} />
      </div>
    );
  }
}

export default Challenge;
