const sequelize = require('./conexionBD');
const bcrypt = require('bcryptjs');
const Usuarios = require('./Tablas/Usuarios');

init = function() {

    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mariadb.");

    }).catch(err => {
        console.error("Conexion no estableccida:", err);
    });

    // createTable(Interno);
    // createTable(tabllaEjemplo) //Si se requiere usar se invoca la variable createTable y dentro de su parentecis el modelo que necesitemos crear 
}

postInternos = function(request, callback) {
    const salt = bcrypt.genSaltSync();
    pw2 = bcrypt.hashSync(request.password, salt);
    Usuarios.create({
        name: request.name,
        lastname: request.lastname,
        phone: request.phone,
        email: request.email,
        password: pw2
    })

}

module.exports.init = init;


//post
module.exports.postInternos = postInternos;