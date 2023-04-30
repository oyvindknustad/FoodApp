if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// Import express into the app variable and import expressLayouts
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Import routes
const indexRouter = require('./routes/index')
const dishesRouter = require('./routes/dishes')
const dishRouter = require('./routes/dish')
const goodsRouter = require('./routes/goods')
const goodsNewDishRouter = require('./routes/goodsNewDish')



// Let app know what's going on
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))

app.use(express.urlencoded({ extended: true }));


// MONGODB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/dishes', dishesRouter)
app.use('/dish', dishRouter)
app.use('/goods', goodsRouter)
app.use('/goodsNewDish', goodsNewDishRouter)



// Tell app to listen to a port
app.listen(process.env.PORT || 3000, () => console.log('App available on http://127.0.0.1:3000'))