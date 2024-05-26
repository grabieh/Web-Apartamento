import { db } from '../config/dbConfig.mjs'

export class User {
    //registrar nuevo usuario
    static async register({userData}) {
        try{

            const {nombre, email, contrasena, telefono} = userData
            //insertar nuevo usuario en la base de datos
            const [result] = await db.query('INSERT INTO usuarios (nombre, email, contrasena, telefono) VALUES (?, ?, ?, ?)', [nombre, email, contrasena, telefono])
            if(result.affectedRows > 0) {
                //esto obtiene el id del nuevo registro
                const userId = result.insertId
                return {success: true, userId, message: 'Created successfully'}
            } else {
                return {success: false, error: 'Registration failed'}
            }  
        } catch(error) {
            console.log(error)
            throw new Error('There was an error creating the user, try with a different email or phone number')
        }
    }
    static async login({loginData}) {
        try{
            const {email, contrasena} = loginData

            //verificar credencialles usuario
            const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ? AND contrasena = ?', [email, contrasena])
            
            if (rows.length > 0) {
                return 'Success'
            } else {
                return {success: false, message: 'Could not find the user'}
            }
        } catch(error) {
            throw new Error('Error logging in')
        }
    }
    static async getAllUsers() {
        try {
            //recuperar todos los usuarios
            const [rows] = await db.query('SELECT * FROM usuarios')
            //devolver todos los usuairos
            return rows
        } catch(error) {
            throw new Error('There was an error getting all the users')
        }
    }
    static async deleteUser({email}) {
        try {
            //eliminar cierto usuario por su nombre
            const [result] = await db.query('DELETE FROM usuarios WHERE email = ?', [email])
            //ver si se logro eliminar el usuario
            if (result.affectedRows > 0) {
                return {success: true, message: 'User deleted'}
            } else {
                return {success: false, message: 'Could not delete user'}
            }
        } catch (error) {
            throw new Error('Error deleting user')
        }
    }
}