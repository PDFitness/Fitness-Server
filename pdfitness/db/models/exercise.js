'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Exercise = db.define('exercise', {
  exerciseId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	  }
  },

  exerciseName: {
  	type: Sequelize.STRING,
    allowNull: false
  },

  ExerciseDescription: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  }
},
{freezeTableName: true})

module.exports = Exercise;
