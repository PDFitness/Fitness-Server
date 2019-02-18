import axios from 'axios';

export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
export const expressTestStart = () => {
    return { type: EXPRESS_TEST_START }
}

export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
export const expressTestResults = (data) => {
    return { type: EXPRESS_TEST_RESULTS, data }
}

export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
export const expressTestError = (data) => {
    return { type: EXPRESS_TEST_ERROR, data }
}

export const EXPRESS_TEST = "EXPRESS_TEST";
export const expressTest = () => {
    return dispatch => {
        dispatch(expressTestStart());
        axios.get(`/api/express-test`)
            .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(expressTestError(err)))

    }
}

export const DB_TEST_START = "DB_TEST_START";
export const dbTestStart = () => {
    return { type: DB_TEST_START }
}
export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
export const dbTestResults = (data) => {
    return { type: DB_TEST_RESULTS, data }
}
export const DB_TEST_ERROR = "DB_TEST_ERROR";
export const dbTestError = (data) => {
    return { type: DB_TEST_ERROR, data }
}

export const DB_TEST = "DB_TEST"
export const dbTest = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/exercises`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

export const DB_EXERCISES = "DB_EXERCISES"
export const dbExercises = () => {
    console.log("db exercises");
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/exercises`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

export const DB_WORKOUTS_BY_COACH = "DB_WORKOUTS_BY_COACH"
export const dbWorkoutsByCoach = (id) => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/workouts/coach`, {
            params: {
                coach_id: id
        }})
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

export const DB_WORKOUTS_SAVE = "DB_WORKOUTS_SAVE"
export const dbWorkoutsSave = (id) => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.post(`/api/workouts/save`, {
            params: {
                coach_id: id
        }})
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

export const DB_INCLUDES = "DB_INCLUDES"
export const dbIncludes = (id) => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/includes/workout`, {
            params: {
                workout_id: id
        }})
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}