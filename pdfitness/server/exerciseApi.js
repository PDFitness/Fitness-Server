const db = require('../db') //this is required
const Exercise = require('../db/models/exercise');


const router = require('express').Router()

router.get('/', function(req, res, next) {
    Exercise.findAll({
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:exerciseName', function(req, res, next) {
    Exercise.findAll({
            where:{exerciseName:req.params.exerciseName},
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
