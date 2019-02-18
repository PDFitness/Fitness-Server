'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Coach = db.define('coach', {
  id: {
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

module.exports = Coach;
