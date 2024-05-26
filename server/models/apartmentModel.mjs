import { db } from '../config/dbConfig.mjs'

export class Apartment {
    //meter informacion en otro idioma para el apartamento
    static async createInfo({apartmentData}) {
        try {

            const {nombre, descripcion, ubicacion, precio} = apartmentData
            //insertar informacion
            const [result] = await db.query('INSERT INTO apartamento (nombre, descripcion, ubicacion, precio) VALUES (?, ?, ?, ?)', [nombre, descripcion, ubicacion, precio])
            //ver si se encontraron resultados
            if (result.affectedRows > 0) {
                //obtiene el id del nuevo registro
                const apartmentId = result.insertId
                return {success: true, apartmentId, message: 'Created successfully'}
            } else {
                return {success: false, error: 'New registration failed'}
            }
        } catch (error) {
            throw new Error('Error creating the apartment')
        }
    }
    static async getInfo({id}) {
        try {
            //recuperar estos campos
            const [rows] = await db.query('SELECT * FROM apartamento WHERE id = ?', [id])
            //ver si se encontraron resultados
            if (rows.length > 0) {
                //devolver la info del apartamento
                return rows[0]
            } else {
                return {success: false, error: 'Apartment info not found'}
            }
        } catch (error) {
            throw new Error('Error getting the apartment information')
        }
    }
    static async deleteInfo({id}) {
        try {
            const [result] = await db.query('DELETE FROM apartamento WHERE id = ?', [id])
            if (result.affectedRows > 0) {
                return {success: true, message: 'Apartment information deleted'}
            } else {
                return {success: false, message: 'Could not find the information'}
            }
        } catch (error) {
            throw new Error('Error deliting the apartmetn info.')
        }
    }
}