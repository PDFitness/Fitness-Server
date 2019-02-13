'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Conducts = db.define('conducts', {
  CompletedDate: {
    type: Sequelize.DATE,
  	allowNull: true,
    defaultValue: null
  },
  AssignDate: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null
  },
  TotalTime: {
    type: Sequelize.TIME,
    allowNull: true,
    defaultValue: null
  }
},
{freezeTableName: true})

module.exports = Conducts;
