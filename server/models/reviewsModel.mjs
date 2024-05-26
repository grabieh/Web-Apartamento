import { db } from "../config/dbConfig.mjs";

export class Reviews {
    //crear una nueva review
    static async create ({review}) {
        try {
            const {puntuacion, comentario} = review

            const [result] = await db.query('INSERT INTO comentarios_resenas (puntuacion, comentario) VALUES (?, ?)', [puntuacion, comentario])

            if (result.affectedRows > 0) {
                return {success: true, message: 'Created successfully'}
            } else {
                return {success: false, error: 'New registration failed'}
            }
        } catch (error) {
            throw new Error('Error creating the review')
        }
    }

    //recuperar las reviews
    static async getReviews() {
        try {
            const [rows] = await db.query('SELECT puntuacion, comentario FROM comentarios_resenas')

        if (rows.length > 0) {
            return rows
        } else {
            return {success: false, error: 'Couldnt get the reviews'}
        }
        } catch (error) {
            throw new Error('Error getting the reviews')
        }
    }

    
}