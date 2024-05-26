import { Router } from "express";
import { UserController } from "../controllers/usersController.mjs";

export const createUserRouter = ({user}) => {
    const userRouter = Router()

    const userController = new UserController({user})

    //ruta para crear un nuevo usuario
    userRouter.post('/register', userController.register)

    //ruta para obtener todos los usuarios
    userRouter.get('/', userController.getAllUsers)

    //ruta para logear a un usuario
    userRouter.post('/login', userController.login)

    userRouter.post('/delete', userController.deleteUser)

    return userRouter

    //TODO: ACABAR LAS RUTAS DEL USUARIO
}