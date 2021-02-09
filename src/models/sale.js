const mongoose = require('../database');

const SaleSchema = new mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required : true
    },
    quantity:{
        type: Number,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;