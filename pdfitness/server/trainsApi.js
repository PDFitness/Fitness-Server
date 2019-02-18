const db = require('../db') //this is required
const Trains = require('../db/models/trains');


const router = require('express').Router()

router.get('/', function(req, res, next) {
    Trains.findAll({
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});
/*
router.get('/:exerciseName', function(req, res, next) {
    Workout.findAll({
            where:{exerciseName:req.params.exerciseName},
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});
*/
module.exports = router
