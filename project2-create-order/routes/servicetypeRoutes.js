const express = require('express');
// const ServicetypesController = require('../controllers/servicetypesController');

const Servicetype = require('../models/servicetypeModel');

const router = express.Router();

// router.get('/', ServicetypesController.index);
// router.get('/:id', ServicetypesController.show);
// router.post('/', ServicetypesController.create);
// router.put('/:id', ServicetypesController.update);
// router.delete('/:id', ServicetypesController.delete);

// INDEX
router.get('/', (req, res) => {
  Servicetype.forge().orderBy('customer_id').fetchAll().then(servicetypeRoutes => {
    res.status(200).json(servicetypeRoutes);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;
