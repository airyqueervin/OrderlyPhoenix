import React from 'react';
require('./../../public/main.css');

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section>
          <h3>About the Game</h3>
          <p>
            Here's some info about the game! 
          </p>
        </section>
        <section>
          <h3>About the Developers</h3>
          <p>
            Here's some info about the developers!
            <table>
              <tr>
                <td>Alex: <img src="https://s3-us-west-1.amazonaws.com/codr/alex.png" /></td>
              </tr>
              <tr>
                <td>Airyque: <img src="https://s3-us-west-1.amazonaws.com/codr/airyque.png" /></td>
              </tr>
              <tr>
                <td>Erik: <img src="https://s3-us-west-1.amazonaws.com/codr/erik.png" /></td>
              </tr>
              <tr>
                <td> Nowreen: <img src="https://s3-us-west-1.amazonaws.com/codr/nowreen.png" /></td>
              </tr>
            </table>
          </p>
        </section>
      </div>
    );
  }
}

export default About;
