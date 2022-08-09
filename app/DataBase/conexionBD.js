const Sequelize = require('sequelize');
const sequelize = new Sequelize("bfcv19", "root", "sasa", {
    host: "localhost",
    dialect: "mariadb",
    port: 3306
}); //Esta info va a depender de la informacion de ustedes como ya se explico 
module.exports = sequelize;