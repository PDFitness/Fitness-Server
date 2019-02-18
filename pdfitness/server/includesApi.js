const db = require('../db') //this is required
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Includes = require('../db/models/includes');
const Exercise = require('../db/models/exercise');
const router = require('express').Router();

router.get('/', function(req, res, next) {
    Includes.findAll({
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/workout', function(req, res, next) {
    /*
    SELECT i.id, e.exercise_name, e.id
    FROM includes as i
    INNER JOIN exercise as e
    ON i.exercise_id=e.id where i.workout_id = 1
    ORDER BY i.id ASC;
    */
    /*Includes.findAll({
        include: [{model: Exercise, as: 'e', required: true,}, ],
        attributes: [['i.id', 'i.id'],['e.exercise_name', 'e.exercise_name'],['e.id', 'e.id']],
        where: {[Op.and]: [{'$i.workout_id$': {[Op.eq]: req.query.workout_id}},
                {'$i.exrecise_id$': {[Op.eq]: 'e.id'}}
    ]},
        order: [['i.id', 'ASC']]*/
        Includes.findAll({
            include: [{
                model: Exercise,
                as: 'exercise',
                required: true
                }],
            where: {workout_id: req.query.workout_id},
            order: [['id', 'ASC']],
            })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});


module.exports = router
