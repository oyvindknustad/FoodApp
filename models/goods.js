const mongoose = require('mongoose')

const goodsSchema = new mongoose.Schema({

 
    ingredientName: {
        type: String
    },
    weight: {
        type: Number
    },
    price: {
        type: Number
    },
    type: {
        type: String
    },
    Shops: {
        vinmonopolet: {
            type: Number
        },
        smakAvItalia: {
            type: Number
        },
        intFood: {
            type: Number
        },
        bunnpris: {
            type: Number
        },
        kiwi: {
            type: Number
        },
        meny: {
            type: Number
        },
        mega: {
            type: Number
        },
        extra: {
            type: Number
        },
        shop: {
            type: Number
        }
    }
}, 
{ collection: 'goods'}
)





module.exports = mongoose.model('Goods', goodsSchema)