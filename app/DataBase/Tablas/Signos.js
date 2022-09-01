const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const Signos = sequelize.define('signos', {

        idSignoRegistrado: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        oxigeno: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        },
        ritmo_cardiaco: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        },
        pulso: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        }



    }, {

        freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
        timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 

    }

)
module.exports = Signos