import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Popular from './Popular';
import Nav from './Nav';
import './App.css';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
            <Route exact path='/' component={Home} />
            <Route path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route path='/battle/results' component={Results} />
            {/* <Route render={function () {
              return <p>Not Found</p>
            }} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
