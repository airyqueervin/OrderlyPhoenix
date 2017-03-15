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
          </p>
        </section>
      </div>
    );
  }

}

export default About;
