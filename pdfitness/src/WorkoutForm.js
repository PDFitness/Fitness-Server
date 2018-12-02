import React, { Component } from 'react';
import Workout from './Workout'
import { Grid, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


class WorkoutForm extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        rowList:["rip"],
        redirect: false
      };
      this.workoutList = ["rip"];
      this.workoutListIndex = 0;
    }

    addRow = (e) => {
      this.setState((prevState) => ({
        rowList: [...prevState.rowList, ""],
      })); 
    }

    submitForm = (e) => {
      console.log(this.state.rowList);
      this.setRedirect();
    }

    cancel = (e) => {
      alert("Redirecting to All Workouts");
      this.setRedirect();
    }
    
    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/Workouts' />
      }
    }

    render() {
      const {rowList} = this.state;
      return (       
        <Grid>
          {<Workout/>}
          {<Workout/>}
          {<Workout/>}
          {rowList.map(() => {  
            return (<Workout/>)
          })}
          <Button onClick={this.addRow}>Add</Button>
          <Button onClick={this.submitForm}>Submit</Button>
          {this.renderRedirect()}
          <Button onClick={this.cancel}>Cancel</Button>

        </Grid>
      )
    }
  }
  
  export default WorkoutForm;