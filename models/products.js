const { Schema,model } = require('mongoose');

const ProductSchema = new Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number,
        default:0
    },
    description:{
        type:String
    }
});

module.exports = model('Product',ProductSchema);