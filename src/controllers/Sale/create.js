const Sale = require('../../models/sale');

const createSale = async (req, res) => {
    const { product, quantity } = req.body;

    try {
        const sale = await Sale.create({ product, quantity });

        return res.send({ sale });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Register sale failed' });

    }
}

module.exports = createSale;