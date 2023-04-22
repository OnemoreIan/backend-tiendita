const { Schema, model } = require('mongoose');

const Producto = new Schema({
    name:String,
    price: Number,
    description:{
        type:String,
        default:'Description no avaliable'
    }
});

module.exports = model("example",Producto);