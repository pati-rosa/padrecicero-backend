const express = require('express');

const Product = require('../models/product');

const router = express.Router();

router.post('/register', async (req,res) => {
    const { name } = req.body;

    try {

        if (await Product.findOne({ name }))
            return res.status(400).send({ error: 'Product already exists' });
        const product = await Product.create(req.body);
        return res.send({ product });

    }   catch(err) {
        console.log(err);
        return res.status(400).send({error: 'Registration failed'});

    }
});

router.get('/listproducts/drinks', async (req,res) => {
    try {
        const products = await Product.find({ category: 'bebidas' });
        return res.send({ products });

    }   catch(err) {
        console.log(err);
        return res.status(400).send({error: 'Consult of products failed'});

    }
});

module.exports = app => app.use('/productmanagement', router);
