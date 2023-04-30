// Import router from express
const express = require('express')
const router = express.Router()
const Good = require('../models/goods') // Import model

// Render the HTML template separately
router.get('/', async (req, res) => {
    
    let searchOptions = {}
    if (req.query.ingredientName != null && req.query.ingredientName !== "") {
        searchOptions.ingredientName = new RegExp(req.query.ingredientName, 'i')
    }
    try {
        const goods = await Good.find(searchOptions)
        
        // Render the HTML template
        res.render('goods/goods', { 
            goods: goods,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})





// Export route
module.exports = router