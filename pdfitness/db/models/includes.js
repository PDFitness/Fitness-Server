'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Includes = db.define('includes', {
  includesId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	  }
  },
  Repetitions: {
  	type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  Duration: {
  	type: Sequelize.TIME,
    allowNull: true,
    defaultValue: null
  },
  Distance: {
  	type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  Weight: {
  	type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  Pace: {
  	type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  }
},
{freezeTableName: true})

module.exports = Includes;
