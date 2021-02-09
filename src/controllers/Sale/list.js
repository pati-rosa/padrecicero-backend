const Sale = require('../../models/sale');

const listProduct = async (req,res) => {
    try {
        const sales = await Sale.find();
        return res.send({ sales });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Consult of sales failed' });

    }

}

module.exports = listProduct;