const sequelize = require('./conexionBD');

init = function() {

    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mysql.");

    }).catch(err => {
        console.error("Conexion no estableccida:", err);
    });

    // createTable(Interno);
    // createTable(tabllaEjemplo) //Si se requiere usar se invoca la variable createTable y dentro de su parentecis el modelo que necesitemos crear 
}