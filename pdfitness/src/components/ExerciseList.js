import React, { Component } from 'react';
import { Grid, Button, ButtonGroup, Col, Row, Jumbotron, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import { Form, FormGroup, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import './ComponentStyle.css'

class ExerciseList extends Component {
    constructor(props, context) {
      super(props, context);
    }

    exerciseArray = [
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
      ];

    renderExercises(exercise, index) {
      index = index + 1
      return (
        <ListGroupItem  className="ListGroupItem-hover">
        {exercise.name}
        <Button className="right-vertical-align btn-transparent" onClick={ () => {this.props.addExerciseToWorkout(exercise)}}>
          <Glyphicon glyph="plus"/>
        </Button>
      </ListGroupItem>
      )
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
              {this.exerciseArray.map(this.renderExercises.bind(this))}
            </ListGroup>
          </Row>
        </div>
      );
    }
  }
  
  export default ExerciseList;
