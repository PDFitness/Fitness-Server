import React, { Component } from 'react';
import { Grid, Button, ButtonGroup, Col, Row, Jumbotron, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import { Form, FormGroup, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import './ComponentStyle.css'

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

class ExerciseList extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        exerciseArray: [],
      };

      this.loadExercises = this.loadExercises.bind(this);
    }

    /**
     * When component is mounted, get exercises from database and update state.
     */
    componentDidMount() {
      console.log("Loading exercise list");
      dbActions.dbGetExercises().then( result => {
        console.log(result);
        this.setState({ exerciseArray: result });
      });
    }

    /*exerciseArray = [
      {id: 1, name:"Running"},
      {id: 2, name:"Pushup"},
      {id: 3, name:"Pullup"},
      {id: 4, name:"Horizontal Bench Press"},
      {id: 5, name:"Bicep Curl"},
      {id: 6, name:"Tricep Dip"},
      {id: 7, name:"Bentover Row"},
      {id: 8, name:"Back Barbell Squat"},
      {id: 9, name:"Front Barbell Squat"},
      {id: 10, name:"Incline Bench Press"},
      {id: 11, name:"Calf Raises"},
      {id: 12, name:"Bicycle Crunches"},
      {id: 13, name:"Lunges"},
      {id: 14, name:"Back Extension"},
      {id: 15, name:"Running"},
      {id: 16, name:"Running"},
      {id: 17, name:"Running"},
      {id: 18, name:"Running"},
      {id: 19, name:"Running"},
      {id: 20, name:"Running"},
      ];*/

    renderExercises(exercise, index) {
      index = index + 1
      return (
        /*<ListGroupItem  className="ListGroupItem-hover">
        {exercise.name}
        <Button className="right-vertical-align btn-transparent" onClick={ () => {this.props.addExerciseToWorkout(exercise)}}>
          <Glyphicon glyph="plus"/>
        </Button>
      </ListGroupItem>*/
      /*{id: 1, exercise_name: "Running", exercise_description: "Running on road or treadmill", 
      createdAt: "2019-02-18T00:18:48.431Z", updatedAt: "2019-02-18T00:18:48.431Z"}*/
      <ListGroupItem  key={index} className="ListGroupItem-hover">
        {exercise.exercise_name}
        <Button className="right-vertical-align btn-transparent" onClick={ () => {this.props.addExerciseToWorkout(exercise)}}>
          <Glyphicon glyph="plus"/>
        </Button>
      </ListGroupItem>
      )
    }

    /**
     * The props.results will change to another result when another API is called,
     * then there will be an error because the exercises will be not the right values.
     * SOLUTION: have a seperate API call thta returns to here?
     * so no attached to global props. need more research 
     */
    loadExercises() {
      console.log("load exercises");
      if (this.state.exerciseArray != null) {
        return this.state.exerciseArray;
      }
      //TODO exerciseArray is never null becuase it is initialized to []
      // is this method even needed?
      return [];
    }
 
    render() {
      return (
        <div>
          <Row>
            <ButtonGroup vertical style={{ width: "100%", padding:"10px 10px 10px 10px"}}>
              <Form inline>
                <FormGroup style={{ width: "100%"}}>
                  <InputGroup style={{ width: "100%"}}>
                    <FormControl 
                      type="text"
                      placeholder="Search Exercise"/>
                    <InputGroup.Button>
                      <Button style={{width:'100%', margin: 0}}><Glyphicon glyph="search" /></Button>
                    </InputGroup.Button>
                  </InputGroup>
                
                <Button style={{width:"100%"}}>
                  <Glyphicon className='vcenter' glyph="plus-sign" style={{paddingRight: 5}}/>
                  <span className='vcenter'> New Exercise</span>
                </Button>
                </FormGroup>
              </Form>
            </ButtonGroup>
          </Row>

          <Row>
            <ListGroup className='exerciselist'>
              {/*this.exerciseArray.map(this.renderExercises.bind(this))*/}
              {this.loadExercises().map(this.renderExercises.bind(this))}
            </ListGroup>
          </Row>
        </div>
      );
    }
  }
  
  //export default ExerciseList;
  export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
