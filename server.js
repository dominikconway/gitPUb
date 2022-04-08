const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
const drinks = require('./models/drinks.js')

app.get('/', (req, res) => {
    res.send('Welcome to the GitPub App!')
})

app.get('/drinks', (req, res) => {
    res.render('index.ejs', {allDrinks: drinks})
})

app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})



app.listen(port, () => {
    console.log(`we are listening on port ${port}`)
})