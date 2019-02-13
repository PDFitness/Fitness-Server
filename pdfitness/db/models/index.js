'use strict';

const Product = require('./product')
const Review = require('./review');

Product.hasMany(Review);
Review.belongsTo(Product);

const Exercise = require('./exercise');
const Person = require('./person');
const Coach = require('./coach');
const Client = require('./client');
const Workout = require('./workout');
const Trains = require('./trains');
const Includes = require('./includes');
const Conducts = require('./conducts');

Coach.belongsTo(Person, { foreignKey: 'coachId' }); // personId will be added to Coach
Client.belongsTo(Person, { foreignKey: 'clientId' }); // personId will be added to Client

Coach.hasMany(Workout, { foreignKey: 'coachId' }); // coachId added to Workout

// Includes will have foreign keys workoutId, exerciseId
//Workout.belongsToMany(Exercise, { through: Includes, foreignKey: 'workoutId' });
//Exercise.belongsToMany(Workout, { through: Includes, foreignKey: 'exerciseId' });
Exercise.hasMany(Includes, { foreignKey: 'exerciseId' });
Workout.hasMany(Includes, { foreignKey: 'workoutId' });

// Trains will have foreign keys coachId, clientId
Coach.belongsToMany(Client, { through: Trains, foreignKey: 'coachId' });
Client.belongsToMany(Coach, { through: Trains, foreignKey: 'clientId' });

// Conducts will have foreign keys workoutId, clientId
Workout.belongsToMany(Client, { through: Conducts, foreignKey: 'workoutId' });
Client.belongsToMany(Workout, { through: Conducts, foreignKey: 'clientId' });

module.exports = {
  Product, Review, 
  Exercise,
  Person,
  Coach,
  Client,
  Workout,
  Trains,
  Includes,
  Conducts
};
