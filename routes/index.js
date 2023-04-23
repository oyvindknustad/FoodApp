// Import router from express
const express = require('express')
const router = express.Router()

// Route to the index page
router.get('/', (req, res) => {
    res.render('index')
})

// Export route
module.exports = router