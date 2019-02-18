'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Workout = db.define('workout', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	  }
  },

  workout_name: {
  	type: Sequelize.STRING,
    allowNull: false
  },

  notes: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: null
  }
},
{freezeTableName: true})

module.exports = Workout;
