'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Trains = db.define('trains', {}, {freezeTableName: true})

module.exports = Trains;

