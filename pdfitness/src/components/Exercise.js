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
    }
 
    render() {
      return (
        <div style={{marginBottom: 10}} className='exercise-row'>
            <Row className="text-center">
              <Col sm={4} className='vcenter'>
                <div className="pull-left">
                  <Image src={runningImage} 
                  style={{margin: 10, display: 'inline-block', verticalAlign: 'middle', height:100, width:100}}/>  
                  {/*<Avatar name="Running" color={'grey'} 
                  style={{margin: 10, display: 'inline-block', verticalAlign: 'middle'}}/> */}
                  <span style={{marginRight: 10}}>
                    <h3 style={{display: "inline", verticalAlign: "middle"}}>Running</h3>
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
              <Col sm={4} className='vcenter'>
                <div className="pull-right">
                  <Button className="btn-transparent">
                    <Glyphicon glyph="edit"/>
                  </Button>
                  <Button className="btn-transparent">
                    <Glyphicon glyph="remove"/>
                  </Button>
                </div>
              </Col>
            </Row>
        </div>
      );
    }
  }
  
  export default Exercise;
