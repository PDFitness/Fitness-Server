'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Client = db.define('client', {
  clientId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  	allowNull: false,
    validate: {
		notEmpty: true,
	  }
  }
},
{freezeTableName: true})

module.exports = Client;
