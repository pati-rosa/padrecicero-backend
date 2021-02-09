const Product = require('../../models/product');

const listProduct = async (req, res) => {
    try {
        const products = await Product.find();
        return res.send({ products });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of products failed' });

    }
}

module.exports = listProduct;
