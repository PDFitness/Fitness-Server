import React, { Component } from 'react';
import ClientList from './ClientList'
import { Table, Button, Modal} from 'react-bootstrap';
class WorkoutTable extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      showClientsPopUp: false,
      selectedWorkout: 0,
     };

    // This binding is necessary to make `this` work in the callback
    this.handleAssignOnClick = this.handleAssignOnClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  workoutArray = [
                  {name:"Running Workout 1",duration:"0",date:"today"},
                  {name:"Running Workout 2",duration:"0",date:"today"},
                  {name:"Running Workout 3",duration:"0",date:"today"},
                  {name:"Running Workout 4",duration:"0",date:"today"},
                  {name:"Running Workout 5",duration:"0",date:"today"},
                  {name:"Running Workout 6",duration:"0",date:"today"},
                  {name:"Running Workout 7",duration:"0",date:"today"},
                  {name:"Running Workout 8",duration:"0",date:"today"},
                  {name:"Running Workout 9",duration:"0",date:"today"},
                  ];


  handleClose() {
    console.log("hide");
    this.setState({ showClientsPopUp: false });
  }
  
  handleAssignOnClick(index, e) {
    console.log("show");
    //alert(index);
    /* open clients list pop up*/
    this.setState({ showClientsPopUp: true, selectedWorkout: index });
  }

  renderWorkouts(workout, index) {
    index = index + 1
    return (
      <tr key={index} onClick={(e) => this.handleAssignOnClick(index, e)}>
        <td>{index}</td>
        <td>{workout.name}</td>
        <td>{workout.duration}</td>
        <td>{workout.date}</td>
      </tr>
    )
  }
  
  render () {

      return (
        <div>
          <h1>Workouts</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Workout #</th>
                <th>Name</th>
                <th>Duration</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.workoutArray.map(this.renderWorkouts.bind(this))}
            </tbody>
          </Table>
<div>
          <Modal show={this.state.showClientsPopUp} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Workout #{this.state.selectedWorkout}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Assign Workout To Clients</h4>
            <ClientList/>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
</div>
        </div>
      )
   }
}

export default WorkoutTable;