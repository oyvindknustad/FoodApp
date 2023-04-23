if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// Import express into the app variable and import expressLayouts
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

// Import index router
const indexRouter = require('./routes/index')

// Let app know what's going on
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// MONGODB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

// Tell app to listen to a port
app.listen(process.env.PORT || 3000)