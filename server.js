const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
const drinks = require('./models/drinks.js')
const foods = require('./models/food.js')

// welcome page
app.get('/', (req, res) => {
    res.send('Welcome to the GitPub App!')
})
// index route - show all drinks
app.get('/drinks', (req, res) => {
    res.render('index.ejs', {allDrinks: drinks})
})
// show route - show a specific drink
app.get('/drinks/:id', (req, res) => {
    res.render('show.ejs', {drink: drinks[req.params.id]})
})

app.get('/foods', (req, res) => {
    res.render('food_index.ejs',{allFoods: foods})
})

app.get('/foods/:id', (req, res) => {
    res.render('food_show.ejs',{food: foods[req.params.id]})
})


app.listen(port, () => {
    console.log(`we are listening on port ${port}`)
})