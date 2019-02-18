'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Includes = db.define('includes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	  }
  },
  repetitions: {
  	type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  duration: {
  	type: Sequelize.TIME,
    allowNull: true,
    defaultValue: null
  },
  distance: {
  	type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  weight: {
  	type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  pace: {
  	type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  }
},
{freezeTableName: true})

module.exports = Includes;
