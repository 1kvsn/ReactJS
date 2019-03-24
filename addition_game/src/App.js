import React, { Component } from 'react';
import './App.css';


// Display 2 numbers on the screen
//make them random
//check if the users input is equal to the sum of two numbers
//if they are equal, show next random number
//if they are not equal, change the color of the existing number to red until the user inputs correct answer.
//keep a score of the game
//When the score reaches 5, the game should show a modal winning message.
//Make a reset button for restarting the game at any point.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      response: "",
      incorrect: false,
      score: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <div id="problem" className={this.state.incorrect ? "incorrect" : ""}>
          {this.state.num1} + {this.state.num2}
        </div>
        <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response}/>
        Score: {this.state.score}
      </div>
    );
  }

  updateResponse = (event) => {
    this.setState({response: event.target.value})
  }

  inputKeyPress = (event) => {
    if(event.key === "Enter") {
      const answer = parseInt(this.state.response);
      if(answer === this.state.num1 + this.state.num2) {
        this.setState({
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          response: "",
          incorrect: false,
          score: this.state.score + 1,
        });
      } else {
        this.setState({
          response: "",
          incorrect: true,
        })
      }
    }
  }

}

export default App;

