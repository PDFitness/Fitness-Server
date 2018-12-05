const db = require('../db') //this is required
const Exercises = require('../db/models/exercises');


const router = require('express').Router()

router.get('/', function(req, res, next) {
    Exercises.findAll({
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:exercise_name', function(req, res, next) {
    Exercises.findOne({
            where:{exercise_name:req.params.exercise_name},
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
