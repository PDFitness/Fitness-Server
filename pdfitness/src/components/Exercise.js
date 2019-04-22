import React, { Component } from 'react';
import Avatar from 'react-avatar';
import {FormControl, ControlLabel, FormGroup, Form, Label, Image} from 'react-bootstrap';
import {Button, Row, Col, Grid, Glyphicon} from 'react-bootstrap';
import './ComponentStyle.css'

import runningImage from '../images/running.png';

const options = ["Running", "Dumbbell Curls"];

class Exercise extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        id: this.props.id,
      };
      console.log("exercise array id: "+ this.props.id);
      console.log("exercise array value: "+ this.props.exercise.exercise_name);
    }
 
    render() {
      return (
        <div style={{paddingBottom: 10}} className='exercise-row'>
            <Row className="text-center">
              <Col sm={2} className='vcenter'>
                {/*<div className="pull-left" height={100}>  */}
                  <Image src={runningImage} className="pull-left"
                  style={{margin: 10, display: 'inline-block', verticalAlign: 'middle', height:100, width:100}}/>
                  {/*<Avatar name="Running" color={'grey'} 
                  style={{margin: 10, display: 'inline-block', verticalAlign: 'middle'}}/> */}
                  {/*</div>*/}
              </Col>
              <Col sm={4} className='vcenter'>
                    <div className="wrap">
                    <span>
                        {this.props.exercise.exercise_name}
                    </span>
                    </div>
              </Col>
              <Col sm={4} className='vcenter'>
                <div>
                  <span style={{fontWeight: 'bold'}}>Dur </span>
                  <span style={{marginRight: 10}}>10 min</span>
                  <span style={{fontWeight: 'bold'}}>HR Zone </span>
                  <span style={{marginRight: 10}}>3</span>
                </div>
              </Col>
              <Col sm={2} className='vcenter'>
                <div className="pull-right">
                  <Button className="btn-transparent">
                    <Glyphicon glyph="edit"/>
                  </Button>
                  <Button className="btn-transparent">
                    <Glyphicon glyph="remove" onClick={ () => {this.props.removeExercise(this.props.id)}}/>
                  </Button>
                </div>
              </Col>
            </Row>
        </div>
      );
    }
  }
  
  export default Exercise;
