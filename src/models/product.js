const mongoose = require('../database');
const ProductSchema = new mongoose.Schema({
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required : true
    },
    name:{
        type: String,
        unique:true,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;