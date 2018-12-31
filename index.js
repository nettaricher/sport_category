const express = require('express')
const ctrl = require('./controller')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/category', ctrl.getAllCategories)
app.post('/category/:id', ctrl.setCategory)
app.get('/category/:first/:last/:location', ctrl.getCategoryByNameLocation)

app.listen(port,
    () => console.log('Express server ready for requests on:' , port))