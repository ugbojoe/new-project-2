const express = require('express');
// const ProductsController = require('../controllers/productsController');
const Product = require('../models/productModel');
const router = express.Router();

// router.get('/', ProductsController.index);
// router.get('/:id', ProductsController.show);
// router.post('/', ProductsController.create);
// router.put('/:id', ProductsController.update);
// router.delete('/:id', ProductsController.delete);

// INDEX
router.get('/', (req, res) => {
  Product.forge().orderBy('customer_id').fetchAll().then(productRoutes => {
    res.status(200).json(productRoutes);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW
router.get('/:id', (req, res) => {
  Product.where({ id: req.params.id })
  .fetch({ withRelated: ['customerModel', 'servicetypeModel', 'orderstageModel'] })
  .then(product => {
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json(product);
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
