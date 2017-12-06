import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.js';
import Landing from './components/landing.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route component={Landing} exact path='/' />
            <Route component={Home} path='/home' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;