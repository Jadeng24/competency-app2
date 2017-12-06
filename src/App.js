import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.js';
import Landing from './components/landing.js';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route component={Landing} exact path='/' />
            <Route component={Home} path='/home' />
            <Route render={() => <div><Link to='/hello'> <h2>Hello</h2> </Link>
              <Link to='/'> <h2>Landing </h2></Link>
              <Link to='/home'> <h2>Home </h2></Link>
            <br/><h1>hello there people</h1></div>} path='/hello' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;