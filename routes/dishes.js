// Import router from express
const express = require('express')
const router = express.Router()
const Dish = require('../models/dish') // Import model

// Get all dishes
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.dishName != null && req.query.dishName !== "") {
        searchOptions.dishName = new RegExp(req.query.dishName, 'i')
    }
    try {
        const dishes = await Dish.find({searchOptions})
        res.render('dishes/index', { 
            dishes: dishes,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})

// Get new dish
router.get('/new', (req, res) => {
    res.render('dishes/new', { dishesColl: new Dish()})
})

// Create new dish
router.post('/', async (req, res) => {
    const dishesColl = new Dish({
        dishName: req.body.dishName,
        dishImage: req.body.dishImage,
        description: req.body.description
    })
    try {
        const newDish = await dishesColl.save()
        res.redirect('dishes')
    } catch {
        res.render('things/new', {
            dishesColl: dishesColl,
            errorMessage: 'Error creating dish'
        })
    }
})

// Export route
module.exports = router