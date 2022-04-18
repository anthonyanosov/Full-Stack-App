const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Create express app
const app = express()
app.use(express.json())
app.use(cors())

// Database connection
mongoose.connect("mongodb://localhost/items")
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Routers
const storesRouter = require('./routes/stores')
const itemsRouter = require('./routes/items')

app.use('/stores', storesRouter)
app.use('/stores/:storeId/items', itemsRouter)

// Port
app.listen(8080, () => console.log('Server started'))
