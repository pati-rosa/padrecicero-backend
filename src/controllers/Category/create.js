const Category = require('../../models/category');

const createCategory = async (req, res) => {

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
}

module.exports = createCategory;
