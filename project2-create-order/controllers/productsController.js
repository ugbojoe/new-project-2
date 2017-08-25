const ProductQueries = require('../db/queries/productQueries');
const chalk = require('chalk');

const handleErrors = (error, response) => {
  console.log(chalk.red(error));
  response.status(404).json(error.message);
};

exports.index = (req, res) => (
  ProductQueries.getAll()
  .then(products => res.status(200).json(products))
  .catch(err => handleErrors(err, res))
);

exports.show = (req, res) => (
  ProductQueries.getOne(req.params.id)
  .then(product => res.status(200).json(product))
  .catch(err => handleErrors(err, res))
);

exports.create = (req, res) => (
  ProductQueries.add(req.body)
  .then(product => res.status(201).json(product))
  .catch(err => handleErrors(err, res))
);

exports.update = (req, res) => (
  ProductQueries.update(req.params.id, req.body)
  .then(product => res.status(200).json(product))
  .catch(err => handleErrors(err, res))
);

exports.delete = (req, res) => (
  ProductQueries.getOne(req.params.id)
  .then(product => {
    console.log(product);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      product.destroy()
      .then(() => {
        res.status(200).json({ message: 'Product deleted' });
      });
    }
  })
  .catch(err => handleErrors(err, res))
);
