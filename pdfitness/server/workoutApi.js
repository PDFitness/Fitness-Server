const db = require('../db') //this is required
const Workout = require('../db/models/workout');
const Includes = require('../db/models/includes');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Workout.findAll({
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

// Get all workouts created by coachId
router.get('/coach', function(req, res, next) {
    //console.log(req);
    Workout.findAll({
            where:{coach_id:req.query.coach_id},
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

// Save workout
router.post('/save', function(req, res, next) {
    console.log(req);
    var workoutId = null;
    //Save Workout Name
    Workout.create(
        {workout_name: "new workout", notes: null, coach_id: req.body.params.coach_id}
        )
        .then(result => {
            saveIncludes(result["id"], res, next);
            res.status(200).send(result);
        })
        /*.then(result => {
            console.log(result)
            res.status(200).send(result);
        })*/
        .catch(err => {
            console.log("ERROR: "+err);
            next(err);
        });
});

function saveIncludes(id, res, next) {

    console.log(id);
    Includes.bulkCreate([
        {workout_id: id, exercise_id: 1, repetitions: null, duration: null, distance: null, weight: null, pace: null},
    ])
    .then(
        result => {
            console.log("includes results: "+result);
            return result;
    })
    .catch(next);
}

module.exports = router
