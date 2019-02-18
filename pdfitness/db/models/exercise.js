'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Exercise = db.define('exercise', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	  }
  },

  exercise_name: {
  	type: Sequelize.STRING,
    allowNull: false
  },

  exercise_description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  }
},
{freezeTableName: true})

module.exports = Exercise;
