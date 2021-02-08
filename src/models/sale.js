const mongoose = require('../database');

const SaleSchema = new mongoose.Schema({
    produto:{
        type: 'String',
        unique:true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;