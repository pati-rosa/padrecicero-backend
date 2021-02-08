const express = require('express');

const Product = require('../models/product');
const Category = require('../models/category');

// const Sale = require('../models/sale');

const router = express.Router();


/*
    Category Routes
*/
router.post('/registercategory', async (req, res) => {

    try {
        const { name } = req.body;

        if (await Category.findOne({ name }))
            return res.status(400).send({ error: 'Category already exists' });

        const category = await Category.create({ name });

        return res.send({ category });

    }
    catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Register category failed' });

    }
});


router.get('/listcategories/:categoryId', async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId).populate('products');
        return res.send({ category });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of products failed' });

    }'602182cc1aea94080169645c'
    try {
        const categories = await Category.find().populate('products');
        return res.send({ categories });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of products failed' });

    }
});

router.get('/listcategories', async (req, res) => {
    try {
        const categories = await Category.find();
        return res.send({ categories });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of categories failed' });

    }
});

router.delete('/deletecategory/:categoryId', async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.categoryId);
        return res.send();

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error deleting category' });

    }
});
/*
    Products Routes
*/

router.post('/registerproduct', async (req, res) => {
    const { name, category, description, price } = req.body;

    try {
        if (await Product.findOne({ name })) {
            return res.status(400).send({ error: 'Product already exists' });
        }

        const product = await Product.create({ name, category, description, price });

        await Category.findByIdAndUpdate(category, {
            $push: {
                products: product._id
            }
        })

        return res.send({ product });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Register product failed' });

    }
});

router.get('/listproducts/:rcategory', async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.rcategory });
        return res.send({ products });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of products failed' });

    }
});

router.get('/listproducts', async (req, res) => {
    try {
        const products = await Product.find();
        return res.send({ products });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of products failed' });

    }
});

module.exports = app => app.use('/productmanagement', router);

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