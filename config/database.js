const Sequelize = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
module.exports = new Sequelize('codegig', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});