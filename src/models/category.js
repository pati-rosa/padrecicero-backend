const mongoose = require('../database');
const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
    
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;