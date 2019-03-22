import React from 'react';
import media from './media/056.png';


function Card() {
	return (
		<div className="card-container">
			<img src={media} />
			<div>
				<p>This is the title</p>
				<p>This is just another random description which doesn't make any sense. Ha ha!</p>
			</div>
		</div>
	)
}

function PReact() {
	return (
		<div>
			{alert('This is cool')}
		</div>
	)
}

export {Card, PReact}