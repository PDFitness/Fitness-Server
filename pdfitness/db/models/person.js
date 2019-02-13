'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Person = db.define('person', {
  personID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	  }
  },
  firstName: {
  	type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
  	type: Sequelize.STRING,
    allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  profilePicture: {
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
