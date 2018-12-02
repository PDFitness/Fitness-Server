import React, { Component } from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

class ActiveWorkout extends Component {
constructor(props) {
  super(props);
  this.state = {
    workout : [
      {exercise: "Run", reps: null, duration: "00:10:00"},
      {exercise: "Curl", reps: 15, duration: null},
      {exercise: "Run", reps: null, duration: "00:10:00"},
      {exercise: "Curl", reps: 15, duration: null},
      {exercise: "Run", reps: null, duration: "00:10:00"},
      {exercise: "Curl", reps: 15, duration: null},
      {exercise: "Run", reps: null, duration: "00:10:00"},
      {exercise: "Curl", reps: 15, duration: null},
      {exercise: "Run", reps: null, duration: "00:10:00"},
      {exercise: "Curl", reps: 15, duration: null}
    ],
    exerciseIndex : 1
  };

  this.handlePause = this.handlePause.bind(this);
  this.handleStop = this.handleStop.bind(this);
  this.handleNext = this.handleNext.bind(this);
  this.handlePrev = this.handlePrev.bind(this);
}

handlePause() {

}

handleStop() {
  
}

handleNext() {
  
}

handlePrev() {
  
}

renderExercises(client, index) {
  index = index + 1
  return (
    <p></p>
  )
}

handleClientOnClick(index, e) {
  //alert(this.state.clientArray[index-1].name);
  let clientArrayNew = this.state.clientArray;
  clientArrayNew[index-1].selected = true;
  this.setState(this.state.clientArray=clientArrayNew);
} 

  render() {

const {workout, exerciseIndex} = this.state;

    return (
      <div>
        <p>{workout[exerciseIndex].exercise}</p>
        <p>{workout[exerciseIndex].reps}</p>
        <p>{workout[exerciseIndex].duration}</p>
        <Button></Button>
      </div>
    )
  }
}

export default ActiveWorkout;
