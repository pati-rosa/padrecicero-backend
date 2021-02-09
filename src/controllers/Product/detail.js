const Product = require('../../models/product');

const detailProduct = async (req, res) => {
    const { rcategory } = req.params;

    try {
        const products = await Product.find({ category: rcategory });
        return res.send({ products });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of products failed' });

    }
}

module.exports = detailProduct;
