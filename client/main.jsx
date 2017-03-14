import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
require('./../public/main.css');
import Challenge from './components/Challenge.jsx';
import Image from './components/Image.jsx';
import Instruction from './components/Instruction.jsx';
import Learn from './components/Learn.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
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
        <h1>Codr</h1>
        <Learn chapter={this.state.chapter}/>
        <Instruction chapter={this.state.chapter}/>
        <Challenge chapter={this.state.chapter}/>
        <Image chapter={this.state.chapter}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
