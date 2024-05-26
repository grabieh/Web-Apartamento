import { validationResult } from "express-validator";

export class ReviewsController {
    constructor ({reviews}) {
        this.reviews = reviews
    }

    //crear apartamento
    create = async (req, res) => {
        
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            res.status(400).json({error: errors.array()})
        }

        try {
            const {puntuacion, comentario} = req.body

            const newReview = await this.reviews.create({review: {puntuacion, comentario}})

            res.status(200).json(newReview)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    getReviews = async (req, res) => {
         const errors = validationResult(req)

         if (!errors.isEmpty()) {
            res.status(400).json({error: errors.array()})
         }

         try {
            const reviews = await this.reviews.getReviews()

            res.status(200).json(reviews)
         } catch (error) {
            res.status(500).json({message: error.message})
         }
    }
}