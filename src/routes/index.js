const express = require('express');

const createCategory = require('../controllers/Category/create');
const listCategory = require('../controllers/Category/list');
const deleteCategory = require('../controllers/Category/create');
const detailCategory = require('../controllers/Category/detail');

const createProduct = require('../controllers/Product/create');
const listProduct = require('../controllers/Product/list');
const detailProduct = require('../controllers/Product/detail');

const createSale = require('../controllers/Sale/create');
const listSale = require('../controllers/Sale/list');

const router = express.Router();


router.get('/category/', listCategory);
router.get('/category/:id', detailCategory);
router.post('/category/', createCategory);
router.delete('/category/:id', deleteCategory);

router.get('/product/', listProduct);
router.get('/product/:id', detailProduct);
router.post('/product/', createProduct);

router.get('/sale/', listSale);
router.post('/sale/', createSale);

module.exports = router;