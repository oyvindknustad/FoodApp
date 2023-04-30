// Import router from express
const express = require('express')
const router = express.Router()
const Dish = require('../models/dish') // Import model
const Good = require('../models/goods')

// Set up image uploader
const multer = require('multer')
const path = require('path')
const uploadPath = path.join('public', Dish.dishImageBasePath)
const imageMimeTypes = ['images/jpeg', 'images/png', 'images/gif']

const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})


// Get all dishes
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.dishName != null && req.query.dishName !== "") {
        searchOptions.dishName = new RegExp(req.query.dishName, 'i')
    }
    try {
        const dishes = await Dish.find(searchOptions)
        
        res.render('dishes/index', { 
            dishes: dishes,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})

// Get new dish
router.get('/new', async (req, res) => {
    try {
        const goods = await Good.find({})
        res.render('dishes/new', { 
            dishesColl: new Dish(),
            goods: goods
        })
    } catch {
        res.render('/')
    }
})

// Define a route to fetch the ingredients from the database
router.get('/ingredients', async (req, res) => {
    try {
      // Fetch all ingredients from the database
      const ingredients = await goods.find({}, 'name');
  
      // Send the ingredients as a JSON response
      res.json(ingredients);
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      res.status(500).send('Internal Server Error');
    }
  });

// Create new dish
router.post('/', upload.single('dishImage'), async (req, res) => {
    const fileName = req.file != null ? req.file.filename : null
    const ingredientNames = Array.isArray(req.body.ingredientName) ? req.body.ingredientName : [];
    const amounts = Array.isArray(req.body.amount) ? req.body.amount : [req.body.amount];
    const metrics = Array.isArray(req.body.metric) ? req.body.metric : [req.body.metric];

    const ingredients = ingredientNames.map((name, index) => ({
        ingredientName: name,
        amount: parseFloat(amounts[index]),
        metric: metrics[index]
    }));

    const dishesColl = new Dish({
        dishName: req.body.dishName,
        dishType: req.body.dishType,
        dishCategory: req.body.dishCategory,
        dishImage: fileName,
        description: req.body.description,
        ingredients: ingredients
    });

    const goods = await Good.find({})
    try {
        const newDish = await dishesColl.save()
        res.redirect('dishes')
    } catch {
        res.render('dishes/new', {
            dishesColl: dishesColl,
            goods: goods,
            errorMessage: 'Error creating dish'
        })
    }
})



// Export route
module.exports = router