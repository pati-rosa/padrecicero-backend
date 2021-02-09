const Product = require('../../models/product');
const Category = require('../../models/category');

const createProduct = async (req, res) => {
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
}

module.exports = createProduct;
