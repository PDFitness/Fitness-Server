import React, { Component } from 'react';
import { Grid, Button, ButtonGroup, Col, Row, Jumbotron, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import { Form, FormGroup, FormControl, InputGroup, Modal } from 'react-bootstrap';
import './ComponentStyle.css'

const options = ["Running", "Dumbbell Curls"];

class ExerciseList extends Component {
    constructor(props, context) {
      super(props, context);
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
            <ListGroup style={{padding:10, height: "100%"}}>
              <ListGroupItem className="ListGroupItem-hover">
                Running
                <Button className="right-vertical-align btn-transparent" onClick={this.addRow}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </ListGroupItem>
              <ListGroupItem className="ListGroupItem-hover">
                Bicep Curl
                <Button className="right-vertical-align btn-transparent" onClick={this.addRow}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </ListGroupItem>
              <ListGroupItem  className="ListGroupItem-hover">
                Cycling
                <Button className="right-vertical-align btn-transparent" onClick={this.addRow}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </ListGroupItem>
              <ListGroupItem  className="ListGroupItem-hover">
                Back Barbell Squat
                <Button className="right-vertical-align btn-transparent" onClick={this.addRow}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </ListGroupItem>
              <ListGroupItem>
                Horizontal Bench Press
                <Button className="right-vertical-align btn-transparent" onClick={this.addRow}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </ListGroupItem>
              <ListGroupItem>
                Incline Bench Press
                <Button className="right-vertical-align btn-transparent" onClick={this.addRow}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </ListGroupItem>
              <ListGroupItem>
                Pullup
                <Button className="right-vertical-align btn-transparent" onClick={this.addRow}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Row>
        </div>
      );
    }
  }
  
  export default ExerciseList;
