import axios from 'axios';

export const dbGetExercises = () => {
  console.log("db get exercises");
  return axios.get(`/api/exercises`)
      .then(res => {
        console.log("returning db get exercises");
        console.log(res.data);
          return res.data;
      })
      .catch(err => {
          return {type: "DB_TEST_ERROR", error: err};
      })
}

export const dbSaveWorkout = (workout) => {
  return axios.post(`/api/workouts/save`, {
          params: {
              coach_id: workout.id,
              workout_name: workout.name,
              exercises: workout.exercises,
      }})
          .then(res => {
            console.log("workout saved!");
          })
          .catch(err => {
            console.log("Error with saving workout");
          })
}

export const DB_WORKOUTS_BY_COACH = "DB_WORKOUTS_BY_COACH"
export const dbWorkoutsByCoach = (id) => {
    return axios.get(`/api/workouts/coach`, {
            params: {
                coach_id: id
        }})
            .then(res => {
              console.log("Get workouts by coach");
              return res.data;
            })
            .catch(err => {
              console.log("Error getting workouts by coach id");
            })

}
