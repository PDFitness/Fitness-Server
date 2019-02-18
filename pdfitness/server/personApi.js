const db = require('../db') //this is required
const Person = require('../db/models/person');


const router = require('express').Router()

router.get('/', function(req, res, next) {
  Person.findAll({
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:personId', function(req, res, next) {
  Person.findAll({
            where:{personId:req.params.personId},
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
