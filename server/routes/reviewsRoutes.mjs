import { Router } from "express";
import { ReviewsController } from "../controllers/reviewsController.mjs";

export const createReviewsRouter = ({reviews}) => {
    const reviewsRouter = Router()

    const reviewsController = new ReviewsController({reviews})

    //crear review
    reviewsRouter.post('/generate', reviewsController.create)

    reviewsRouter.get('/', reviewsController.getReviews)

    return reviewsRouter
}