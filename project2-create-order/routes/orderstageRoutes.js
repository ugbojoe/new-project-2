const express = require('express');
// const OrderstagesController = require('../controllers/orderstagesController');

const Orderstage = require('../models/orderstageModel');

const router = express.Router();

// router.get('/', OrderstagesController.index);
// router.get('/:id', OrderstagesController.show);
// router.post('/', OrderstagesController.create);
// router.put('/:id', OrderstagesController.update);
// router.delete('/:id', orderstagesController.delete);

// INDEX
router.get('/', (req, res) => {
  Orderstage.forge().orderBy('customer_id').fetchAll().then(orderstageRoutes => {
    res.status(200).json(orderstageRoutes);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
