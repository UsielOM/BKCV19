const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const InforPersonal = sequelize.define('info_Personal', {

        idInfoPersonal: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        genero: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        },
        Edad: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        },
        Altura: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        },
        idIllness: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        Estado: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        },
        Nacionalidad: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        },
        DosisAplicadas: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false

        },



    }, {

        freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
        timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 

    }

)
module.exports = InforPersonal