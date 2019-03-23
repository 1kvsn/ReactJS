import React from 'react';
import media from './media/056.png';


export function Card() {
	return (
		<div className="card-container">
			<img alt="" src={media} />
			<div>
				<p>This is the title</p>
				<p>This is just another random description which doesn't make any sense. Ha ha!</p>
			</div>
		</div>
	)
}

export function PReact() {
	return (
		<div>
			{console.log('This is cool')}
		</div>
	)
}

// export class FriendsContainer extends React.Component {
// 	render() {
// 		var name = 'Tyler Mc';
// 		var friends = ['Ean Platter', 'Murply Randall', 'Sasikant Nair'];
// 		return (
// 			<div>
// 				<h3>Name: {name} </h3>
// 				<ShowList names={friends} />
// 			</div>
// 		)
// 	}
// }

// export class ShowList extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h3>Friends</h3>
// 				<ul> {(this.props.names.map(friend => {
// 					return <li>{friend}</li>;
// 				}))}
// 				</ul>
// 			</div>
// 		)
// 	}
// }

