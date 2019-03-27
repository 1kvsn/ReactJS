import React from 'react';
import DemoComponent from './Demo1';
import {FuncDemo} from './Demo1';
// import Parent from './Demo2';



class App extends React.Component {
	render() {
		return (
			<>
				<DemoComponent user = "Captain" />
				<FuncDemo user = "Abid is a funcDemo user passed as 'props'" />
				
			</> 
		)
	}
}


export default App;

