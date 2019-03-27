import React from 'react';


// Parent Comp.
class Parent extends React.Component {
	render() {
		return (
			<div>
				<h2> This is parent Comp.</h2>
				<h3>This is Parent Property: {this.props.username}</h3>
				<Child name = "Cap Mar" userID = "Mar Vell"/>
			</div>
		);
	}
}

//Child Comp.
export class Child extends React.Component {
	render() {
		return (
			<div>
				<h2>Hello, {this.props.name}</h2>
				<h3>This is Child Comp. You're inside it.</h3>
				<h3>Your user id is: {this.props.userID}</h3>
			</div>
		);
	}
}


export default Parent;