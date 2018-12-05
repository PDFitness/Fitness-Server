import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import WorkoutForm from './components/WorkoutForm';
import WorkoutTable from './components/WorkoutTable';
import ActiveWorkout from './components/ActiveWorkout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//This will route to the component with out the nav bar
const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route path='/AddWorkout' component={WorkoutForm} />
        <Route path='/Workouts' component={WorkoutTable} />
        <Route path='/ActiveWorkout' component={ActiveWorkout} />
      </div>
    </Router>
  )
};

export default Routes;
