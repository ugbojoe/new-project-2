const CustomerQueries = require('../db/queries/customerQueries');
const chalk = require('chalk');

const handleErrors = (error, response) => {
  console.log(chalk.red(error));
  response.status(404).json(error.message);
};

exports.index = (req, res) => (
  CustomerQueries.getAll()
  .then(customers => res.status(200).json(customers))
  .catch(err => handleErrors(err, res))
);

exports.show = (req, res) => (
  CustomerQueries.getOne(req.params.id)
  .then(customer => res.status(200).json(customer))
  .catch(err => handleErrors(err, res))
);

exports.create = (req, res) => (
  CustomerQueries.add(req.body)
  .then(customer => res.status(201).json(customer))
  .catch(err => handleErrors(err, res))
);

exports.update = (req, res) => (
  CustomerQueries.update(req.params.id, req.body)
  .then(customer => res.status(200).json(customer))
  .catch(err => handleErrors(err, res))
);

exports.delete = (req, res) => (
  CustomerQueries.getOne(req.params.id)
  .then(customer => {
    console.log(customer);
    if (!customer) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      customer.destroy()
      .then(() => {
        res.status(200).json({ message: 'Customer deleted' });
      });
    }
  })
  .catch(err => handleErrors(err, res))
);
