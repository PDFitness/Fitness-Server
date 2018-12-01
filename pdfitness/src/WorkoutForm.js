import React, { Component } from 'react';
import Workout from './Workout'
import {FormControl, ControlLabel, FormGroup, HelpBlock, ButtonToolbar, DropdownButton, MenuItem, Row, Col, Grid, Form,Button} from 'react-bootstrap';

const options = ["Running", "Dumbbell Curls"];

class WorkoutForm extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        rowList:[]
      };
    }

    addRow = (e) => {
      this.setState((prevState) => ({
        rowList: [...prevState.rowList, ""],
      }));
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
          <Button onClick={this.addRow}>Submit</Button>
          <Button onClick={this.addRow}>Cancel</Button>
        </Grid>
      )
      }
  }
  
  export default WorkoutForm;