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
const Assigns = require('./assigns');

Coach.belongsTo(Person, { foreignKey: 'person_id'}); // personId will be added to Coach
Client.belongsTo(Person, { foreignKey: 'person_id'}); // personId will be added to Client

Coach.hasMany(Workout, { as: 'workout', foreignKey: 'coach_id'}); // coachId added to Workout

// Includes will have foreign keys workoutId, exerciseId
//Workout.belongsToMany(Exercise, { through: Includes, foreignKey: 'workoutId' });
//Exercise.belongsToMany(Workout, { through: Includes, foreignKey: 'exerciseId' });
Exercise.hasMany(Includes, { as: 'includes', foreignKey: 'exercise_id'}); // exerciseId added to Includes
Includes.belongsTo(Exercise, {as: 'exercise', foreignKey: 'exercise_id'})
Workout.hasMany(Includes, { as: 'includes', foreignKey: 'workout_id'}); // workoutId added to Includes
Includes.belongsTo(Workout, {as: 'workout', foreignKey: 'workout_id'})


// Trains will have foreign keys coachId, clientId
Coach.belongsToMany(Client, { through: Trains, foreignKey: 'coach_id' });
Client.belongsToMany(Coach, { through: Trains, foreignKey: 'client_id' });

// Conducts will have foreign keys workoutId, clientId
/*Workout.belongsToMany(Client, { through: Conducts, foreignKey: 'workoutId' });
Client.belongsToMany(Workout, { through: Conducts, foreignKey: 'clientId' });*/

Coach.hasMany(Assigns, { as: 'assigns', foreignKey: 'coach_id'}); // coachId added to Assigns
Client.hasMany(Assigns, { as: 'assigns', foreignKey: 'client_id'}); // clientId added to Assigns
Workout.hasMany(Assigns, { as: 'assigns', foreignKey: 'workout_id'}); // workoutId added to Assigns
Assigns.belongsTo(Coach, {as: 'coach', foreignKey: 'coach_id'})
Assigns.belongsTo(Client, {as: 'client', foreignKey: 'client_id'})
Assigns.belongsTo(Workout, {as: 'workout', foreignKey: 'workout_id'})


module.exports = {
  Product, Review, 
  Exercise,
  Person,
  Coach,
  Client,
  Workout,
  Trains,
  Includes,
  Assigns
};
