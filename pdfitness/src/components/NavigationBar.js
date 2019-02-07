import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Tabs, Tab, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import WorkoutForm from './WorkoutForm';
import WorkoutTable from './WorkoutTable';
import ActiveWorkout from './ActiveWorkout';
import './NavigationBar.css';
import './ComponentStyle.css';
class NavigationBar extends Component{

    render() {
      const { ...props } = this.props;
        return (
          <Router>
            <div className='fullheight'>
            <Navbar id='navbar' bsStyle='tabs' className='navbarstyle'>
              <Navbar.Header>
                <Navbar.Brand className='navbarbrand'>
                  <a href="#">PD-Fitness</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav >
                <LinkContainer to={'/AddWorkout'} className="navbartext">
                  <NavItem eventKey={1} href="#" >Add Workout</NavItem>
                </LinkContainer>
                <LinkContainer to={'/Workouts'}>
                  <NavItem eventKey={2} href="#">All Workouts</NavItem>
                </LinkContainer>
                <LinkContainer to={'/ActiveWorkout'}>
                  <NavItem eventKey={3} href="#">Active Workout</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar>
              
              <Switch>
                  <Route exact path='/' render={() => <WorkoutTable />} />
                  <Route path='/AddWorkout' render={() => <WorkoutForm />} />
                  <Route path='/Workouts' render={() => <WorkoutTable />} />
                  <Route path='/ActiveWorkout' component={ActiveWorkout} />
              </Switch>
            </div>
          </Router>
        );
    }

  }
  export default NavigationBar;