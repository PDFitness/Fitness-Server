import React, { Component } from 'react';
import Workout from './Workout'
import {FormControl, ControlLabel, FormGroup, HelpBlock, ButtonToolbar, DropdownButton, MenuItem, Row, Col, Grid, Form,Button} from 'react-bootstrap';

const options = ["Running", "Dumbbell Curls"];

class WorkoutForm extends Component {
    constructor(props, context) {
      super(props, context);
      // this.addRow = this.addRow.bind(this);
      this.state = {numOfChildren: 0};
    }


    addRow() {
      let newRow = <Workout/>
    }
    // onAddRow = () => {
    //   this.setState({
    //     numChildren: this.state.numChildren + 1
    //   });
    // }
    

    render() {
      const children = [];
      for (var i = 0; i < this.statenumOfChildren; i++) {
        children.push(<Workout/>);
      };
      
      return (
        <Parent addRow={this.onAddRow}>
          {children}
        </Parent>
      );


    }


   


  
  }
  const Parent = props => (
    <Grid>
       <Button onClick={props.onAddRow}>Add component</Button>
              {props.children}
    </Grid>
  );
  export default WorkoutForm;
