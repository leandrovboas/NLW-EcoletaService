import express from 'express'

const app = express()

app.get('/user', (request, response) => {
    response.json(
    [
        "Leandro",
        "Thais",
        "Leticia"
    ])
});

app.listen(3000)
