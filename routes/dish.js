// Import router from express
const express = require('express')
const router = express.Router()
const Dish = require('../models/dish')
const Good = require('../models/goods')

// Route to the index page
router.get('/:dishName', async (req, res) => {
    try {
        const dishes = await Dish.find().lean()
        const dish = await Dish.findOne({ dishName: req.params.dishName })
        const goods = await Good.find({})
        res.render('dishes/dish', { 
            dish: dish, 
            dishes, dishes,
            goods: goods
        })
    } catch {
        res.redirect('/dishes')
    }
})

// Export route
module.exports = router