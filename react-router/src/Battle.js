import React from 'react';
import Player from './Player';

class Battle extends React.Component {
	render() {
		return (
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: "1200px", margin: '0 auto'}}>
				<Player playerName="one" />
				<Player playerName="two" />
			</div>
		)
	}
}

export default Battle;