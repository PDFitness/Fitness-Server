import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WorkoutForm from './WorkoutForm';
import WorkoutTable from './WorkoutTable';
import { Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <Navbar navbar-expand-lg navbar-light bg-light>
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/AddWorkout'} className="nav-link">Add Workout</Link></li>
            <li><Link to={'/Workouts'} className="nav-link">All Workouts</Link></li>
          </ul>
          </Navbar>
          <hr />
          <Switch>
              <Route exact path='/' component={WorkoutTable} />
              <Route path='/AddWorkout' component={WorkoutForm} />
              <Route path='/Workouts' component={WorkoutTable} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
