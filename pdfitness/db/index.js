const debug = require('debug')('sql')
const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../package.json')
require('dotenv').config()

const name = process.env.DATABASE_NAME || pkg.name;

const port = process.env.DATABASE_PORT || '5432';

const host = process.env.DATABASE_HOST || 'localhost';

const dialect = process.env.DATABASE_DIALECT || 'postgres';

const url = process.env.DATABASE_URL || `${dialect}://${host}}:${port}/${name}`;

console.log(chalk.yellow(`Opening database connection to ${url}${name}`));

// create the database instance
/*const db = module.exports = new Sequelize(url, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  define: {
    underscored: true,       // use snake_case rather than camelCase column names
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  },
  password: 'postgres'
})*/

const db = module.exports = new Sequelize( 
  name, 
  process.env.DATABASE_USERNAME, 
  process.env.DATABASE_PASSWORD, {
    dialect: dialect,
    host: host,
    port: port,
})

// pull in our models
require('./models')

// sync the db, creating it if necessary
function sync(retries=0, maxRetries=5) {
  return db.sync({force:false})
    .then(ok => console.log(`Synced models to db ${url}`))
    .catch(fail => {
      console.log(fail)
    })
}

db.didSync = sync()
