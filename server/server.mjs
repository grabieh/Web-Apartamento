import express from 'express'
import cors from 'cors'
import { createUserRouter } from './routes/userRoutes.mjs'
import { User } from "./models/userModel.mjs";
import { createApartmentRouter } from './routes/apartmentRoutes.mjs';
import { Apartment } from './models/apartmentModel.mjs';
import { createReviewsRouter } from './routes/reviewsRoutes.mjs';
import { Reviews } from './models/reviewsModel.mjs';

const app = express()

app.use(cors())
app.use(express.json())

app.use('/user', createUserRouter({user: User}))
app.use('/apartment', createApartmentRouter({apartment: Apartment}))
app.use('/reviews', createReviewsRouter({reviews: Reviews}))

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })


