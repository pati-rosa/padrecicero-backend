const express = require('express');

const Product = require('../models/product');

const Sale = require('../models/sale');

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

router.get('/listproducts/:rcategory', async (req,res) => {
    try {
        const products = await Product.find({ category: req.params.rcategory });
        return res.send({ products });

    }   catch(err) {
        console.log(err);
        return res.status(400).send({error: 'Consult of products failed'});

    }
});

router.get('/listproducts/', async (req,res) => {
    try {
        const products = await Product.find();
        return res.send({ products });

    }   catch(err) {
        console.log(err);
        return res.status(400).send({error: 'Consult of products failed'});

    }
});

// router.post('/registersale/:id', async(req,res) => {

//     try{
//         const product = await Product.findOne({ 
//                 where: {
//                     id: req.params.id,
//                 }  
//             }
//         )
//     }
//     catch{
//         console.log(err);
//         return res.status(400).send({error: 'Add product to sale products failed'});
//     }
// });

module.exports = app => app.use('/productmanagement', router);
