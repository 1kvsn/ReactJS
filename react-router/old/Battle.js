import React from 'react';
import Player from './Player';
var Link = require('react-router-dom').Link;

class Battle extends React.Component {
	state = {
		one: null,
		two: null,
	}
	addData = (data, key) => {
		this.setState({[key]: data})
	}

	handleClick = (e) => {
		// this.state.one.followers > this.state.two.followers ? alert("one won") : alert("one lost")
		const calcOne = (this.state.one.followers * this.state.one.public_repos) + this.state.one.following;
		const calcTwo = (this.state.two.followers * this.state.two.public_repos) + this.state.two.following;
		console.log(calcOne, calcTwo);

		// if(calcOne > calcTwo) {

		// }

	}

	render() {
		const {one, two} = this.state;
		return (
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: "1200px", margin: '0 auto'}}>
				<Player playerName="one" addData={this.addData}/>
				<Player playerName="two" addData={this.addData}/>
				{
					one && two ? <button className="button" onClick={this.handleClick}>Battle</button> : ""
				}
			</div>
		)
	}
}

export default Battle;