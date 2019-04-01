import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import User from './User';

class App extends Component {
  state = {
    user: null,
  }

  showUser = (user) => {
    this.setState({ user })
  }

  logOutUser = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
         {
          (this.state.user) ? <User logOutUser={this.logOutUser}/> : <Login showUser={this.showUser}/>
        }
      </>
    );
  }
}

export default App;
