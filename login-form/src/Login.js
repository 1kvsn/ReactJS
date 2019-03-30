import React, { Component } from 'react';
import './App.css';
import { handleLogin } from './api';
import User from './User';

class Login extends Component {
	constructor(props) {
    super(props)

    this.state = {
      username: null,
      password: null,
		}

	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	// handleSubmit = () => {
	// 	const { username, password } = this.state;
	// 	handleLogin(username, password).then(user => ??????????????????????????????????????????????????????????????????????????????? ).catch(err => alert(err))
	// }

  render() {
    return (
      <div className="parent">
        <div>
					<h1>Account Login</h1>
					<form className="form-container" >
						<input className="username" name="username" onChange={this.handleChange} type="text" placeholder="Username"></input>
						<input className="password" name="password" onChange={this.handleChange} type="password" placeholder="Password"></input>
						<input className="submit-btn" type="button" value="sign in" onClick={this.handleSubmit}></input>
					</form>
					<h5>Forgot password?</h5>
				</div>
      </div>
    );
  }
}

export default Login;
