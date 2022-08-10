const sequelize = require('./conexionBD');
const bcrypt = require('bcryptjs');

init = function() {

    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mariadb.");

    }).catch(err => {
        console.error("Conexion no estableccida:", err);
    });

    // createTable(Interno);
    // createTable(tabllaEjemplo) //Si se requiere usar se invoca la variable createTable y dentro de su parentecis el modelo que necesitemos crear 
}

module.exports.init = init;