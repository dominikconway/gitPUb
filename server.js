const express = require('express')
const app = express()
const port = 3000
const drinks = require('./models/drinks.js')

app.get('/', (req, res) => {
    res.send('Welcome to the GitPub App!')
})

app.get('/drinks', (req, res) => {
    res.render('index.ejs')
})


app.listen(port, () => {
    console.log(`we are listening on port ${port}`)
})