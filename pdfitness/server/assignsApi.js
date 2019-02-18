const db = require('../db') //this is required
const Assigns = require('../db/models/assigns');


const router = require('express').Router()

router.get('/', function(req, res, next) {
    Assigns.findAll({
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
