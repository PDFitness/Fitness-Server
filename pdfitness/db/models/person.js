'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Person = db.define('person', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	  }
  },
  first_name: {
  	type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
  	type: Sequelize.STRING,
    allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  profile_picture: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  information: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: null
  }
},
{freezeTableName: true})

module.exports = Person;
