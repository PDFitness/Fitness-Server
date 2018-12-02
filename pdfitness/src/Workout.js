import React, { Component } from 'react';
import {FormControl, ControlLabel, FormGroup, DropdownButton, MenuItem, Button, Row, Col, Grid, Form} from 'react-bootstrap';

const options = ["Running", "Dumbbell Curls"];

class WorkoutForm extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChangeReps = this.handleChangeReps.bind(this);
      this.handleChangeDuration = this.handleChangeDuration.bind(this);

      this.state = {
        reps: Number,
        duration: Number,
        selectedOption: "Select Workout"
      };
    }
  
    getValidationStateReps() {
      const num = this.state.reps;
      if (num > 0) return 'success';
      else if (num < 0) return 'warning';
      else if (num > 100 ) return 'error';
      return null;
    }
    getValidationStateDuration() {
      const num = this.state.duration;
      if (num > 0 && num < 60) return 'success';
      else if (num < 0) return 'warning';
      return null;
    }
  
    handleChangeReps(e) {
      this.setState({ reps: e.target.reps });
    }

    handleChangeDuration(e) {
      this.setState({ duration: e.target.duration });
    }
  
    handleSelect(eventKey) {
      this.setState({ selectedOption: options[eventKey] });
    }

    addRow() {
      return (
          
        <Form inline>
        <Row>
              <FormGroup>
                    <DropdownButton
                        bsStyle="default"
                        title={this.state.selectedOption}
                        id="dropdown-basic"
                        selectedOption = {this.state.selectedOption}
                        onSelect={this.handleSelect.bind(this)}
                        style = {{width: 150}}
                        >
                        {options.map((opt, i) => (
                        <MenuItem key={i} eventKey={i} >
                          {opt}
                        </MenuItem>  ))}
                    </DropdownButton>
              </FormGroup>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationStateReps()}
                >
                    <ControlLabel>Activity Name</ControlLabel>
                    <FormControl
                      type="test"
                      reps={this.state.reps}
                      placeholder="Activity Name"
                      onChange={this.handleChangeReps}
                    />
                    <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationStateReps()}
                >
                    <ControlLabel>Number of Reps</ControlLabel>
                    <FormControl
                      type="number"
                      reps={this.state.reps}
                      placeholder="Reps"
                      onChange={this.handleChangeReps}
                    />
                    <FormControl.Feedback />
              </FormGroup>
          
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationStateDuration()}
                >
                    <ControlLabel>Duration</ControlLabel>
                    <FormControl
                      type="number"
                      duration={this.state.duration}
                      placeholder="Duration"
                      onChange={this.handleChangeDuration}
                    />
                    <FormControl.Feedback />
              </FormGroup>
              </Row>
        </Form>      
      )
    }
  
    render() {
      return (
        <Grid>
        {this.addRow()}

        </Grid>                          
                          
         

        
      );
    }
  }
  
  export default WorkoutForm;
