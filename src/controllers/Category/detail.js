const Category = require('../../models/category');

const detailCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findById(id).populate('products');
        return res.send({ category });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of products failed' });

    }
}

module.exports = detailCategory;
