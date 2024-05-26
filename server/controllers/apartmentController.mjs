import { validationResult } from "express-validator";

export class ApartmentController {
    constructor ({apartment}) {
        this.apartment = apartment
    }

    create = async (req, res) => {
        //validar errores
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()})
        }

        try {
            //const obtener los datos del cuerpo
            const {nombre, descripcion, ubicacion, precio} = req.body
            
            const newInfo = await this.apartment.createInfo({apartmentData: {nombre, descripcion, ubicacion, precio}})

            res.status(200).json(newInfo)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    getInfo = async (req, res) => {
        //validar errores
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({error: errors.array()})
        }

        try {
            //obtener datos segun id
            const {id} = req.params

            const apartment = await this.apartment.getInfo({id})

            res.status(200).json(apartment)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    delete = async (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({error: errors.array()})
        }

        try {
            //obtener el id 
            const id = req.body

            await this.apartment.deleteInfo(id)

            res.status(200).json({success: true})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}