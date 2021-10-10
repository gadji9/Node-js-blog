const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('blog', 'postgres', 'gm357753', {
    dialect: 'postgres',
    port: 5432,
    host: 'localhost',
  })
module.exports = {sequelize, DataTypes}