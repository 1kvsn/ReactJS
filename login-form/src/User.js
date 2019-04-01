import React, { Component } from 'react';
import './App.css';

class User extends Component {

  state = {
    user: null,
  }
  render() {
    return (
      <div className="user-container">
        <div>
          <img src="http://i42.tinypic.com/2889qhc.jpg" width="300px" height="400px" />
          <h2>Hey..I'm Vegeta. Don't you dare log me out!</h2>
        </div>
        <button className="logout-btn" onClick={this.props.logOutUser}>Log Out</button>
      </div>
    );
  }
}

export default User;
