const Category = require('../../models/category');

const deleteCategory = async (req, res) => {
    const { id } = req.params;
  
    try {
        await Category.findByIdAndRemove(id);
        return res.send();

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error deleting category' });

    }

}

module.exports = deleteCategory;
