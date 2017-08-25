const OrderstageQueries = require('../db/queries/orderstageQueries');
const chalk = require('chalk');

const handleErrors = (error, response) => {
  console.log(chalk.red(error));
  response.status(404).json(error.message);
};

exports.index = (req, res) => (
  OrderstageQueries.getAll()
  .then(orderstages => res.status(200).json(orderstages))
  .catch(err => handleErrors(err, res))
);

exports.show = (req, res) => (
  OrderstageQueries.getOne(req.params.id)
  .then(orderstage => res.status(200).json(orderstage))
  .catch(err => handleErrors(err, res))
);

exports.create = (req, res) => (
  OrderstageQueries.add(req.body)
  .then(orderstage => res.status(201).json(orderstage))
  .catch(err => handleErrors(err, res))
);

exports.update = (req, res) => (
  OrderstageQueries.update(req.params.id, req.body)
  .then(orderstage => res.status(200).json(orderstage))
  .catch(err => handleErrors(err, res))
);

exports.delete = (req, res) => (
  OrderstageQueries.getOne(req.params.id)
  .then(orderstage => {
    console.log(orderstage);
    if (!orderstage) {
      res.status(404).json({ message: 'Orderstage not found' });
    } else {
      orderstage.destroy()
      .then(() => {
        res.status(200).json({ message: 'Orderstage deleted' });
      });
    }
  })
  .catch(err => handleErrors(err, res))
);
