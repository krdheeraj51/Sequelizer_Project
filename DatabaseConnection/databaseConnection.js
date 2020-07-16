// include sequelize
const sequelize = require('sequelize');

// create new object for Database connection
const Sequelize = new sequelize(
    'sequelize_demo_db',
    'root',
    'root',
    {
        host: "localhost",
        dialect: "mysql"
    })

    // export module

module.exports = Sequelize;

