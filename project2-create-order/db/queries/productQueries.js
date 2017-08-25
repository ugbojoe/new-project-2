const Product = require('../../models/productModel');
const Base = require('./baseQueries');

const getAll = () => Base.getAll(Product);

const getOne = id => Base.getOne(Product)(id, 'customers');
// const getOne = id => Base.getOne(Product)(id, 'customer', 'servicetype', 'orderstage');

const add = album => Base.add(Product)(album);

const update = (id, body) => Base.update(Product)(id, body);

module.exports = { getAll, getOne, add, update };
