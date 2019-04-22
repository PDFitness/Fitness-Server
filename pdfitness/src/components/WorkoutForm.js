import React, { Component } from 'react';
import Workout from './Workout';
import Exercise from './Exercise';
import ExerciseList from './ExerciseList';
import { Grid, Button, ButtonGroup, Col, Row, Jumbotron, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import { Form, FormGroup, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './ComponentStyle.css';
//db test
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dbActions from '../actions/actions.js';

  //testing db
function mapStateToProps(state) {
    return {
      results: state.demo.results
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

class WorkoutForm extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        workoutExerciseList:{},
        redirect: false,
        showEditExercise: false,
        workoutListIndex: 0,
        workoutName: '',
      };
      this.addExerciseToWorkout = this.addExerciseToWorkout.bind(this);
      this.removeExerciseFromWorkout = this.removeExerciseFromWorkout.bind(this);
      this.updateWorkoutName = this.updateWorkoutName.bind(this);
    }

    saveWorkout = (e) => {
      console.log("saving workout: " + this.state.workoutName);
      console.log(this.state.workoutExerciseList);
      var workout = {id: 1, name: this.state.workoutName, exercises: this.state.workoutExerciseList}
      dbActions.dbSaveWorkout(workout);
      //this.setRedirect();
      // Save the exercise id's to DB in order.
      // when retreiving workouts from DB, we will get them in ascending order.
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

    addExerciseToWorkout(exercise) {
      var workoutExerciseListNew = this.state.workoutExerciseList;
      workoutExerciseListNew[this.state.workoutListIndex] = exercise;
      this.setState({
        workoutExerciseList: workoutExerciseListNew,
        workoutListIndex: this.state.workoutListIndex+1
      });
      console.log(workoutExerciseListNew);
    }

    removeExerciseFromWorkout(index) {
      console.log("removing index: "+index);
      console.log(this.state.workoutExerciseList);
      var workoutExerciseListNew = this.state.workoutExerciseList;
      if (index !== -1) {
        delete workoutExerciseListNew[index];
        this.setState({workoutExerciseList: workoutExerciseListNew});
      }      
      console.log(workoutExerciseListNew);

    }

    updateWorkoutName(event) {
      //console.log("workout name: "+ event.target.value);
      this.setState({workoutName: event.target.value});
    }

   /* workoutExerciseArray = [
      {id: 1, name: 'Running', distance: '400m', duration: null, repititions: null, weight: null, hrzone: null},
      {id: 2, name: 'Running2', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
      {id: 3, name: 'Running3', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
      {id: 4, name: 'Running4', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
      {id: 5, name: 'Running', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
      {id: 6, name: 'Running', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
      {id: 7, name: 'Running', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
      {id: 8, name: 'Running', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
      {id: 9, name: 'Running', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
      {id: 10, name: 'Running', distance: null, duration: null, repititions: null, weight: null, hrzone: null},
    ];
*/
    renderWorkoutExercise(workoutExerciseKey, value) {
      /*console.log("render workout exercise key: "+workoutExerciseKey);
      console.log(value);
      console.log(this.state.workoutExerciseList[workoutExerciseKey]);*/
      return (
        <Exercise id={workoutExerciseKey} removeExercise={this.removeExerciseFromWorkout} exercise={this.state.workoutExerciseList[workoutExerciseKey]}/>
      )
    }

    render() {
      const {rowList} = this.state;
      const { ...props } = this.props;

      return (       
        <div className='fullheight'>
        {/*<Button bsStyle="primary" onClick={this.handleShow}>
          Launch modal
      </Button>*/}
        <Modal show={this.state.showEditExercise} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Running</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Edit Exercise here</h4>
            <Exercise/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Grid style={{ marginLeft: 0, marginRight: 0, paddingBottom: 10, overflow:'hidden' }}>
          <Row style={{height: '100%', paddingBottom: 10}}>
            <Col md={8}>
              <InputGroup 
              style={{ width: "100%", paddingBottom: 20, marginLeft: 10, marginRight: 10}}>
                <FormControl 
                  bsSize="large"
                  type="text"
                  placeholder="Name Your Workout"
                  onChange={evt => this.updateWorkoutName(evt)} />
              </InputGroup>
              <div>
              <ListGroup className='workoutexercises'>
            {Object.keys(this.state.workoutExerciseList).map(this.renderWorkoutExercise.bind(this))}
              </ListGroup>
              </div>
            </Col>
            <Col md={4}>
              <ExerciseList addExerciseToWorkout={this.addExerciseToWorkout}/>

              <ButtonGroup className="pull-right" style={{padding:"10px 10px 10px 10px"}}>
                <Button>Cancel</Button>
                <Button onClick={this.saveWorkout}>Save</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>

        {/*<Button id='savebtn' 
        style={{margin: '0px',
          top: 'auto',
          right: '20px',
          bottom: '20px',
          left: 'auto',
          position: 'fixed'}}>
        save
              </Button>*/}
        </div>
      )
    }
  }
  
  //export default WorkoutForm;
  export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);