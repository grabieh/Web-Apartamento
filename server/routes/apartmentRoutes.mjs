import { Router } from "express";
import { ApartmentController } from "../controllers/apartmentController.mjs";

export const createApartmentRouter = ({apartment}) => {
    const apartmentRouter = Router()

    const apartmentController = new ApartmentController({apartment})

    //meter info de apartamento en otro idioma
    apartmentRouter.post('/create', apartmentController.create)

    //obtener info del apartamento ingles
    apartmentRouter.get('/getInfo/:id', apartmentController.getInfo)

    //borrar info del apartamento
    apartmentRouter.post('/deleteInfo', apartmentController.delete)

    return apartmentRouter
}