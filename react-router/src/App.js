import React, {Component} from 'react';

import Popular from './Popular';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Nav from './Nav';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>
    );
  }
}

export default App;
