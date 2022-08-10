const { response } = require('express');
const sequelize = require('../../DataBase/conexionBD');
const bcrypt = require('bcryptjs');
const Usuarios = require('../../DataBase/Tablas/Usuarios');

const { generarJWT } = require('../helpers/jwt');
const loginUsuario = async(req, res) => {
    const { email, password } = req.body;
    try {
        //validar al usuario o al correo
        const dbUser = await sequelize.query(
            "Select a.email, a.password,  a.name from usuarios a  where a.email = '" + email + "'; ", {
                type: sequelize.QueryTypes.SELECT
            });
        if (dbUser >= 0) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe',
                user: dbUser
            })
        }
        //validar contraseña
        const validPassword = bcrypt.compareSync(password, dbUser[0].password);
        if (!validPassword) {
            return res.status(400).json({
                of: false,
                msg: 'El password no es valido'
            });
        }

        //creat JWT
        const token = await generarJWT(dbUser[0].name, email);

        return res.json({
            ok: true,
            msg: 'ruta login',
            email: dbUser[0].email,
            name: dbUser[0].name,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const cambiarPassword = async(req, res = response) => {
    const { email, password } = req.body;
    let pw2;

    try {
        //validar usuario
        const dbUser = await sequelize.query(
            "Select a.email, a.password,  a.name from usuarios a  where a.email = '" + email + "'; ", {
                type: sequelize.QueryTypes.SELECT
            });
        if (dbUser >= 0) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe',
                user: dbUser
            })
        }
        //hashear la contraseña
        const salt = bcrypt.genSaltSync();
        pw2 = bcrypt.hashSync(password, salt);

        //crear JWT
        const token = await generarJWT(dbUser[0].name, email);

        //Generar el update a la tabla
        Usuarios.update({
            password: pw2
        }, {
            where: {
                idUsuario: dbUser[0].idUsuario
            }
        }).then(result => {
            console.log(result)
        })

        return res.status(201).json({
            ok: true,
            msg: 'Se cambio la contraseña',
            dbUser,
            token,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const revalidarToken = async(req, res = response) => {
    const { name, email } = req;
    //Gwenerar token
    const token = await generarJWT(name, email);
    return res.json({
        ok: true,
        msg: 'Renew',
        name,
        email,
        token
    })

}



module.exports = {
    loginUsuario,
    cambiarPassword,
    revalidarToken
}