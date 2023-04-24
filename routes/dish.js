// Import router from express
const express = require('express')
const router = express.Router()
const Dish = require('../models/dish')

// Route to the index page
router.get('/:dishName', async (req, res) => {
    try {
        const dishes = await Dish.find().lean()
        const dish = await Dish.findOne({ dishName: req.params.dishName })
        res.render('dishes/dish', { dish: dish, dishes, dishes })
    } catch {
        res.redirect('/dishes')
    }
})

// Export route
module.exports = router