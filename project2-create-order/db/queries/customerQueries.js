const Customer = require('../../models/customerModel');
const Base = require('./baseQueries');

const getAll = () => Base.getAll(Customer);

// const getOne = id => Base.getOne(Customer)(id, 'products', 'servicetype', 'orderstage');
const getOne = id => Base.getOne(Customer)(id, 'products');

const add = customer => Base.add(Customer)(customer);

const update = (id, body) => Base.update(Customer)(id, body);

module.exports = { getAll, getOne, add, update };
