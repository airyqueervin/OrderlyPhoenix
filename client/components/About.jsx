import React from 'react';
require('./../../public/main.css');
require('./../../public/about.css');
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="content--inner">
        <section className="section--about--game">
          <h3 className="text--about">About the Game</h3>
          <p className="text--about p--about">
            Our vision was to create a game that made it easy for young developers to learn to code.
            We were inspired to create this game to help kids get a better understanding of how computer science can be fun.
            With the industry going the way it is, software engineers are more in demand than ever. This game will fast track
            kids on the learning path while having fun. Codr makes it easier to learn tough programming concepts by breaking them down into easy to understand levels. 
            In the future, we hope to inspire more kids to be creative and innovative and give them the tools necessary to 
            start their path to coding. As we continue to build our app, we will include more developed levels, exciting animations, and current industry practices.
          </p>
        </section>
        <section>
          <h3 className="text--about">About the Developers</h3>
          <p>
            <table className="table--about">
              <tr>
                <td className="td--about"><strong>Airyque</strong><br />
                 <p className="p--author--description">loves swiss cheese, Kirby's Adventure Land NES, and his favorite cartoon is Looney Toons!</p><br />
                <div className="circular--portrait">
                <img className="img--profile" src="https://s3-us-west-1.amazonaws.com/codr/airyque.png" />
                </div>
                </td>
                <td className="td--about"><strong>Nowreen</strong><br />
                 <p className="p--author--description">loves smoked gouda cheese, Ocarina of Time, and her favorite cartoon is Dexter's Lab!</p><br />
                <div className="circular--portrait">
                <img className="img--profile" src="https://s3-us-west-1.amazonaws.com/codr/nowreen.png" />
                </div>
                </td>
              </tr>
              <tr>
                <td className="td--about"><strong>Erik</strong><br />
                 <p className="p--author--description">loves gjetost cheese, Cave Story, and his favorite cartoon is the Moomins!</p><br/>
                <div className="circular--portrait">
                <img className="img--profile" src="https://s3-us-west-1.amazonaws.com/codr/erik.png" />
                </div>
                </td>
                <td className="td--about"><strong>Alex</strong><br />
                 <p className="p--author--description">loves provolone cheese, Super Smash Bros, and his favorite cartoon is Yu Yu Hakusho!</p><br/>
                <div className="circular--portrait">
                <img className="img--profile" src="https://s3-us-west-1.amazonaws.com/codr/alex.png" />
                </div>
                </td>
              </tr>
            </table>
          </p>
        </section>
      </div>
    );
  }
}
export default About;