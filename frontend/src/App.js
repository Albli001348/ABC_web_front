import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import Home from './components/Home';
import ABC from './components/ABC';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
	render() {
		return <Router>
			<Switch>
			 <Route exact path="/" component={Home}></Route>
			 <Route path="/abc" component={ABC}></Route>
			</Switch>
		       </Router>
	}
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
