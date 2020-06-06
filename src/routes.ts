import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializeItems = items.map(item => {
        return {
            title: item.title,
            image: `http://localhost:3000/uploads/${item.image}`
        }
    })
    return response.json(serializeItems)
});

export default routes