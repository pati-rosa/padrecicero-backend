const Category = require('../../models/category');

const listCategory = async (req, res) => {
  
    try {
        const categories = await Category.find();
        return res.send({ categories });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of categories failed' });

    }

}

module.exports = listCategory;
