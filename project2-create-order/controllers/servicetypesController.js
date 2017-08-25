const ServicetypeQueries = require('../db/queries/servicetypeQueries');
const chalk = require('chalk');

const handleErrors = (error, response) => {
  console.log(chalk.red(error));
  response.status(404).json(error.message);
};

exports.index = (req, res) => (
  ServicetypeQueries.getAll()
  .then(servicetypes => res.status(200).json(servicetypes))
  .catch(err => handleErrors(err, res))
);

exports.show = (req, res) => (
  ServicetypeQueries.getOne(req.params.id)
  .then(servicetype => res.status(200).json(servicetype))
  .catch(err => handleErrors(err, res))
);

exports.create = (req, res) => (
  ServicetypeQueries.add(req.body)
  .then(servicetype => res.status(201).json(servicetype))
  .catch(err => handleErrors(err, res))
);

exports.update = (req, res) => (
  ServicetypeQueries.update(req.params.id, req.body)
  .then(servicetype => res.status(200).json(servicetype))
  .catch(err => handleErrors(err, res))
);

exports.delete = (req, res) => (
  ServicetypeQueries.getOne(req.params.id)
  .then(servicetype => {
    console.log(servicetype);
    if (!servicetype) {
      res.status(404).json({ message: 'Servicetype not found' });
    } else {
      servicetype.destroy()
      .then(() => {
        res.status(200).json({ message: 'Servicetype deleted' });
      });
    }
  })
  .catch(err => handleErrors(err, res))
);
