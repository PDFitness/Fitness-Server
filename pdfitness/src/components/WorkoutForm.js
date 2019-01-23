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
        rowList:[],
        redirect: false,
        showEditExercise: false
      };
      this.workoutList = ["rip"];
      this.workoutListIndex = 0;
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
      this.setState({ showEditExercise: false });
    }
  
    handleShow() {
      this.setState({ showEditExercise: true });
    }

    addRow = (e) => {
      this.setState((prevState) => ({
        rowList: [...prevState.rowList, ""],
      })); 
    }

    submitForm = (e) => {
      console.log(this.state.rowList);
      this.setRedirect();
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

        <Grid style={{ marginLeft: 0, marginRight: 0, height: '100%' }}>
          {/*<button onClick={this.props.actions.dbTest}>Test if Express and Sequelize are working</button>
          <div style={{ padding: '30px' }}>{this.props.results}</div>*/}
                        {/*<Button onClick={this.addRow}>Add</Button>
              <Button onClick={this.submitForm}>Submit</Button>
              {this.renderRedirect()}
              <Button onClick={this.cancel}>Cancel</Button>*/}
          <Row  className='maxcol' style={{height: '100%'}}>
            <Col md={8}>
              <InputGroup 
              style={{ width: "100%", paddingBottom: 20, marginLeft: 10, marginRight: 10}}>
                <FormControl 
                  bsSize="large"
                  type="text"
                  placeholder="Name Your Workout" />
              </InputGroup>
              <div>
                <Exercise/>
                <Exercise/>
                <Exercise/>
                {rowList.map(() => {  
                  return (<Exercise/>)
                })}
              </div>
            </Col>
            <Col md={4} className='maxcol'>
              <ExerciseList style={{height: 'auto'}}/>
            </Col>
          </Row>
        </Grid>

        <Button id='savebtn' 
        style={{margin: '0px',
          top: 'auto',
          right: '20px',
          bottom: '20px',
          left: 'auto',
          position: 'fixed'}}>
        save
        </Button>
        </div>
      )
    }
  }
  
  //export default WorkoutForm;
  export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);