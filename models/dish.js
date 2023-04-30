const mongoose = require('mongoose')

const dishImageBasePath = 'uploads/dishImages'

// Define Ingredient Schema
  const ingredientSchema = new mongoose.Schema({
    ingredientName: {
        type: String
    },
    amount: {
        type: Number
    },
    metric: {
        type: String
    },
    shop:{
        type:  String
    }
  });

// Define Dish Schema
const dishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    dishType: {
        type: String
    },
    dishCategory: {
        type: String
    },
    ingredients: [ingredientSchema],
    description: {
        type: String
    },
    dishImage: {
        // 3:50 https://www.youtube.com/watch?v=Zi2UwhpooF8&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=7&ab_channel=WebDevSimplified
        type: String
    }
},
{ collection: 'dishesColl'}
)

module.exports = mongoose.model('Ingredient', ingredientSchema)
module.exports = mongoose.model('Dish', dishSchema)
module.exports.dishImageBasePath = dishImageBasePath
