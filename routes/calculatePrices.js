// Import router from express
const express = require('express')
const router = express.Router()
const Goods = require('../models/goods');


router.post('/', async (req, res) => {
  try {
    // Retrieve the form data from the request body
    const { ingredientName, amount, metric } = req.body;
    console.log(ingredientName)
    const document = await Goods.findOne({ ingredientName })
    console.log(document)
    // Perform the min and max price calculations based on the form data
    const minPrice = 35//calculateMinPrice(ingredientName, amount, metric);
    const maxPrice = 354//calculateMaxPrice(ingredientName, amount, metric);
  
    // Return the calculated prices as a response
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ minPrice, maxPrice }));
  } catch {
    console.error('Calculation failed with error:', error);
    res.status(500).json({ error: 'Calculation failed' });
  }
    
  });


  

  // Export route
module.exports = router