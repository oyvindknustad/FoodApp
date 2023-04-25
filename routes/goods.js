// Import router from express
const express = require('express')
const router = express.Router()
const Good = require('../models/goods') // Import model
const bson = require('bson')

// Get all goods
router.get('/', async (req, res) => {
    
    let searchOptions = {}
    
    if (req.query.ingredientName != null && req.query.ingredientName !== "") {
        searchOptions.ingredientName = new RegExp(req.query.ingredientName, 'i')
    }
    try {
        const goods = await Good.find(searchOptions)
        res.render('dishes/goods', { 
            goods: goods,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})

// Export route
module.exports = router