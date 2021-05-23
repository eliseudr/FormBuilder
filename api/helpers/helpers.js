const { Sequelize, DataTypes } = require("sequelize");

// Create a new conection to your database, this should be extracted to a config file.
var getSequelize = function (nomedb) {
    return new Sequelize(nomedb, 'root', '1364',{
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
        },
    });
  };

module.exports = {
    getSequelize,
}