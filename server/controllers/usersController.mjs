import { validationResult } from "express-validator";

export class UserController {
    constructor ({user}) {
        this.user = user
    }

    register = async (req, res) => {
        //validar los datos de entrada 
        const errors = validationResult(req)
    
        if (!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()})      
        }

        try {
            //obtener datos del cuerpo de la solicitud
            const {nombre, email, contrasena, telefono} = req.body

            //registrar al nuevo usuario con el metodo del modelo
            const newUser = await this.user.register({userData: {nombre, email, contrasena, telefono}})
            res.status(201).json(newUser)
        } catch (error) {
            
            res.status(500).json({message: error.message})
        }
    }

    login = async (req, res) => {
        //validar datos de entrada
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()})
        }

        try {
            //obtener los datos del form del login
            const {email, contrasena} = req.body

            const userVerify = await this.user.login({loginData: {email, contrasena}})

            res.status(200).json(userVerify)
        } catch (error) {
            //error si ocurre algun problema
            res.status(500).json({messgae: error.message})
        }
    }

    getAllUsers = async (req, res) => {

        try {
            //guardar todos los usuarios en una variable
            const allUsers = await this.user.getAllUsers()

            res.status(200).json(allUsers)
        } catch (error) {
            //error si ocurre algun problema
            res.status(500).json({message: error.message})
        }
    }

    deleteUser = async (req, res) => {
        //validar daots de entrada
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()})
        }

        try {
            //recuperar el email para eliminar el usuario con ese email
            const email = req.body
            //pasarle el dato al metodo de la clase user
            await this.user.deleteUser(email)

            res.status(200).json({success: true})
        } catch (error) {
            //error si ocurre algun problema
            res.status(500).json({message: error.message})
        }
    }
}