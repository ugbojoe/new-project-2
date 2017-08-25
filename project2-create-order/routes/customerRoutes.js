const express = require('express');
// const CustomersController = require('../controllers/customersController');
// const CustomersController = require('../controllers/customersController');
// const CustomersController = require('../controllers/customersController');

// Controller Bypass not using generator controllers
const Customer = require('../models/customerModel');
// const Product = require('../models/productModel');
// const Servicetype = require('../models/servicetypeModel');
// const Orderstage = require('../models/orderstageModel');

const router = express.Router();

// router.get('/', CustomersController.index);
// router.get('/:id', CustomersController.show);
// router.post('/', CustomersController.create);
// router.put('/:id', CustomersController.update);
// router.delete('/:id', CustomersController.delete);

// ********************************************************
// IMPORTED

// INDEX
router.get('/', (req, res) => {
  Customer.forge().orderBy('customer_code').fetchAll().then(customerRoutes => {
    res.status(200).json(customerRoutes);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW
router.get('/:id', (req, res) => {
  Customer.where({ id: req.params.id })
  .fetch({ withRelated: ['productModel', 'servicetypeModel', 'orderstageModel'] })
  .then(customer => {
    if (!customer) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      res.status(200).json(customer);
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
//
// // CREATE
// router.post('/', (req, res) => {
//   Movie.forge(req.body).save().then(movie => {
//     res.status(201).json(movie);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });
//
// // UPDATE
// router.put('/:id', (req, res) => {
//   Movie.forge({ id: req.params.id }).save(req.body).then(movie => {
//     res.status(200).json(movie);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });
//
// // DESTROY
// router.delete('/:id', (req, res) => {
//   Movie.where({ id: req.params.id }).fetch().then(movie => {
//     if (!movie) {
//       res.status(404).json({ message: 'Movie not found' });
//     } else {
//       movie
//       .destroy()
//       .then(() => {
//         res.status(200).json({ message: 'Movie deleted' });
//       }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//     }
//   });
// });
//
// // Add Actor to Movie
// router.post('/:id/actors/:actorId', (req, res) => {
//   Promise.all([
//     Movie.where({ id: req.params.id }).fetch(),
//     Actor.where({ id: req.params.actorId }).fetch()
//   ])
//   .then(([movie, actor]) => {
//     if (!movie) {
//       const error = { message: 'Movie not found' };
//       res.status(404).json(error);
//       return Promise.reject(error);
//     } else if (!actor) {
//       const error = { message: 'Actor not found' };
//       res.status(404).json(error);
//       return Promise.reject(error);
//     }
//     return movie.actors().attach(actor);
//   })
//   .then(() => Movie.where({ id: req.params.id }).fetch({ withRelated: ['director', 'actors'] }))
//   .then(movie => {
//     res.status(200).send(movie);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });
//
// // Remove Actor from Movie
// router.delete('/:id/actors/:actorId', (req, res) => {
//   Promise.all([
//     Movie.where({ id: req.params.id }).fetch(),
//     Actor.where({ id: req.params.actorId }).fetch()
//   ])
//   .then(([movie, actor]) => {
//     if (!movie) {
//       const error = { message: 'Movie not found' };
//       res.status(404).json(error);
//       return Promise.reject(error);
//     } else if (!actor) {
//       const error = { message: 'Actor not found' };
//       res.status(404).json(error);
//       return Promise.reject(error);
//     }
//     return movie.actors().detach(actor);
//   })
//   .then(() => Movie.where({ id: req.params.id }).fetch({ withRelated: ['director', 'actors'] }))
//   .then(movie => {
//     res.status(200).send(movie);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// module.exports = router;
