import React from 'react';
import {store} from './redux';

export default class Counter extends React.Component {
	componentDidMount = () => {
		store.subscribe(() => this.forceUpdate())
	}

	handleInc() {
		store.dispatch({type: 'INCREMENT'})
	}
	handleDec() {
		store.dispatch({type: 'DECREMENT'})
	}

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<p>{store.getState()}</p>
				<button onClick={() => this.handleInc()}>Inc</button>
				<button onClick={() => this.handleDec()}>Dec</button>
			</div>
		)
	}
}