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
        workoutExerciseList:[],
        redirect: false,
        showEditExercise: false,
      };
      this.addExerciseToWorkout = this.addExerciseToWorkout.bind(this);
      this.removeExerciseFromWorkout = this.removeExerciseFromWorkout.bind(this);
    }

    saveWorkout = (e) => {
      console.log(this.state.workoutExerciseList);
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

    addExerciseToWorkout(value) {
      let workoutExerciseListNew = this.state.workoutExerciseList;
      let addValue = value;
      workoutExerciseListNew.push(addValue);
      this.setState({workoutExerciseList: workoutExerciseListNew});
      /*console.log(value);*/
    }

    removeExerciseFromWorkout(index) {
      console.log(index);
      console.log(this.state.workoutExerciseList);
      var workoutExerciseListNew = [...this.state.workoutExerciseList];
      if (index !== -1) {
        workoutExerciseListNew.splice(index, 1);
        this.setState({workoutExerciseList: workoutExerciseListNew});
      }      
      console.log(workoutExerciseListNew);

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
    renderWorkoutExercise(workoutExercise, id) {
      console.log(workoutExercise);
      console.log(id);
      return (
        <Exercise id={id} removeExercise={this.removeExerciseFromWorkout} exercise={workoutExercise}/>
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
          {/*<button onClick={this.props.actions.dbTest}>Test if Express and Sequelize are working</button>
          <div style={{ padding: '30px' }}>{this.props.results}</div>*/}
                        {/*<Button onClick={this.addRow}>Add</Button>
              <Button onClick={this.submitForm}>Submit</Button>
              {this.renderRedirect()}
              <Button onClick={this.cancel}>Cancel</Button>*/}
          <Row style={{height: '100%', paddingBottom: 10}}>
            <Col md={8}>
              <InputGroup 
              style={{ width: "100%", paddingBottom: 20, marginLeft: 10, marginRight: 10}}>
                <FormControl 
                  bsSize="large"
                  type="text"
                  placeholder="Name Your Workout" />
              </InputGroup>
              <div>
              <ListGroup className='workoutexercises'>
            {this.state.workoutExerciseList.map(this.renderWorkoutExercise.bind(this))}
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