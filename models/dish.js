const mongoose = require('mongoose')

const dishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    ingredients: {
        type: Map,
        of: new mongoose.Schema({
            ingredientName: {
                type: String
            },
            ingredientType: {
                type: String
            },
            amount: {
                type: Number
            },
            metric: {
                type: String
            },
            priceKg: {
                type: Number
            },
            shop: {
                type: String
            }
    })
},
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

module.exports = mongoose.model('Dish', dishSchema)