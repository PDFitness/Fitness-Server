'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Assigns = db.define('assigns', {
  completed_date: {
    type: Sequelize.DATE,
  	allowNull: true,
    defaultValue: null
  },
  assign_date: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null
  },
  total_time: {
    type: Sequelize.TIME,
    allowNull: true,
    defaultValue: null
  }
},
{freezeTableName: true})

module.exports = Assigns;
