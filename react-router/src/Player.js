import React from "react";

export default class Player extends React.Component {
	state = {
		username: "",
		userInfo: null
	}
	handleChange = (e) => {
		this.setState({ username: e.target.value})
	}
	handleSubmit = () => {
		fetch(`https://api.github.com/users/${this.state.username}`)
			.then(res => res.json())
			.then(data => this.setState({userInfo: data}))
	}
	render() {
		return (
			<div>
				{
					this.state.userInfo ? (
						<>
							<img src={this.state.userInfo ? this.state.userInfo.avatar_url : ""} />
							<p>{this.state.userInfo ? this.state.userInfo.login : ""}</p>
						</>

					) : (
						<>
							<h1>{"Player " + this.props.playerName}</h1>
							<input onKeyUp={this.handleChange} defaultValue={this.state.username} type="text" placeholder="Enter Username" />
							<button type="submit" onClick={this.handleSubmit}>Submit</button>
						</>
					)
				}
				
			</div>
		)
	}
}