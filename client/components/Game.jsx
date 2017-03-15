import React from 'react';
import Learn from './Learn.jsx';
import Instruction from './Instruction.jsx';
import Challenge from './Challenge.jsx';
import Image from './Image.jsx';
import axios from 'axios';
require('./../../public/main.css');

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getChapter = this.getChapter.bind(this);
    this.getChapter();
  }

  getChapter() {
    axios({
      url: '/api/chapter',
      method: 'get'
    })
    .then(res => {
      this.setState({
        chapter: res.data
      });
    })
    .catch(err => {
      console.error('Error retrieving chapters: ', err);
    });
  }

  render() {
    return (
      <div>
        <Learn chapter={this.state.chapter}/>
        <Instruction chapter={this.state.chapter}/>
        <Challenge chapter={this.state.chapter}/>
        <Image chapter={this.state.chapter}/>
      </div>
    );
  }
}

export default Game;