import React from 'react';


class DemoComponent extends React.Component {
	render() {
		return (
			<>
				<div>
					<h2>Hello {this.props.user}</h2>
					<h3>Welcome to the Democomponent!</h3>
					<hr/>
				</div>
			</>
		)
	}
}

export default DemoComponent;




export function FuncDemo(props) {
	console.log(props)
	return(
		<div>
			<h3>Bye Bye {props.user}</h3>
			<h4>This is funcDemo without this!</h4>
		</div>
	);
}




// https://www.geeksforgeeks.org/reactjs-props-set-1/