import React, {Component} from 'react';

import Popular from './Popular';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Nav from './Nav';
import './App.css';
import Home from './Home';
import Battle from './Battle';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/battle' component={Battle} />
          <Route path='/popular' component={Popular} />
          <Route path='/battle/results' component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
