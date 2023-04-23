const mongoose = require('mongoose')

const dishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
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