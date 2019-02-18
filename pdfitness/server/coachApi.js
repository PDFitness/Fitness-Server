const db = require('../db') //this is required
const Coach = require('../db/models/coach');


const router = require('express').Router()

router.get('/', function(req, res, next) {
    Coach.findAll({
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});
/*
router.get('/:coachName', function(req, res, next) {
    Coach.findAll({
            where:{:req.params.coachName},
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});
*/
module.exports = router
