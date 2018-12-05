'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Exercises = db.define('exercises', {
  exercise_name: {
    type: Sequelize.STRING,
    primaryKey: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	}
  },

  description: {
  	type: Sequelize.TEXT,
  	allowNull: true,
  	defaultValue: null
  },

  has_duration: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: null
  }
})

module.exports = Exercises;
