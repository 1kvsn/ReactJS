import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import User from './User';

class App extends Component {
  state = {
    user: null,
  }
  render() {
    return (
      <div className="App">
         {
          (this.state.user) ? <User username={this.state.username} /> : <Login />
        }
      </div>
    );
  }
}

export default App;
