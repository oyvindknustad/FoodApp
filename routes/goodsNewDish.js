// Import router from express
const express = require('express')
const router = express.Router()
const Good = require('../models/goods') // Import model

// Get all goods
router.get('/', async (req, res) => {
    let searchOptions = {};
    if (req.query.ingredientName != null && req.query.ingredientName !== "") {
        searchOptions.ingredientName = new RegExp(req.query.ingredientName, 'i');
    }
    try {
        const goods = await Good.find(searchOptions);

        // Extract ingredientName values into an array
        const ingredientNames = goods.map((ingredient) => ingredient.ingredientName);

        // Send the ingredientNames array as the response
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(ingredientNames));
    } catch {
        res.redirect('/');
    }
});


// Export route
module.exports = router