const {sequelize, DataTypes} = require('../db')

const User = sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
const Blog = sequelize.define('userblog', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text:{
        type: DataTypes.TEXT,
    }
})
User.hasMany(Blog)
Blog.belongsTo(User)
User.sync()
Blog.sync()
module.exports = {User, Blog}