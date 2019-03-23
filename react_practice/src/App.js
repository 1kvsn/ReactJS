import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Card, PReact} from './Card';

// const divStyle = {
//   color: 'red',
//   padding: '10px',
//   background: 'black'
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      response: "",
      incorrect: false,
      score: 0
    };
  }

  render() {
    if(this.state.score === 10) {
      return this.renderWin();
    } else {
      return this.renderProblem();
    }
  }

  renderProblem() {
    return (
      <div>
        <Card />
        <PReact />
        <div id="app">
          <div id="problem" className={this.state.incorrect ? "incorrect" : ""}>
            {this.state.num1} + {this.state.num2}
          </div>
          <input placeholder="Enter answer here" onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response}/>
          <div>
            Score: {this.state.score}
          </div>
        </div>
      </div>
    );
  }

  renderWin() {
    return (
      <div id="winner">
        You Win!
      </div>
    )
  }

  updateResponse = (event) => {
    this.setState({response: event.target.value});
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
          incorrect: true
        })
      }
    }
  }
}

export default App;

// response = "" means by default there is nothing in the input field. Response is going to be the part of the state which keeps track of the user's input.
//Whatever is in the this.state.response is going to be rendered in the input field.
//When you've written the this.state.response line, if you check the input field and try to type anything, you'll find that it doesn't allow/show anything we type.
//Reason: We've set the initialstate of response as "" and this is what the React is rendering using the this.state.response. It keeps on showing empty string in the input field.
//Now, as our input field is taking the inputs, let's handle an event so that when the user inputs something and presses Enter, we can grab the input and do something with it.
//