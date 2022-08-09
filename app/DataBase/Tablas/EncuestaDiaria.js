const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const EncuestaDiaria = sequelize.define('encuestadiaria', {
    iddailypoll: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
    },
    question: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false

    },
    response: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
    timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 

})
module.exports = EncuestaDiaria