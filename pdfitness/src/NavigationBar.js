import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WorkoutForm from './WorkoutForm';
import WorkoutTable from './WorkoutTable';

class NavigationBar extends Component{
    render() {
        return (
          <Router>
        <div>
          <h2>Welcome to PD-Fitness </h2>
          
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">PD-Fitness</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
            <li><Link to={'/AddWorkout'} className="nav-link">Add Workout</Link></li>
            </NavItem>
            <NavItem eventKey={2} href="#">
            <li><Link to={'/Workouts'} className="nav-link">All Workouts</Link></li>
            </NavItem>
          </Nav>
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
  export default NavigationBar;