const api = module.exports = require('express').Router()
const products = require('./products');
const reviews = require('./reviews');
const exercises = require('./exerciseApi');
const workouts = require('./workoutApi');
const persons = require('./personApi');
const coaches = require('./coachApi');
const clients = require('./clientApi');
const trains = require('./trainsApi');
const assigns = require('./assignsApi');
const includes = require('./includesApi');
// import products from './products';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/products', products)
  .use('/reviews', reviews)
  .use('/exercises', exercises)
  .use('/workouts', workouts)
  .use('/persons', persons)
  .use('/clients', clients)
  .use('/coaches', coaches)
  .use('/trains', trains)
  .use('/assigns', assigns)
  .use('/includes', includes)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
