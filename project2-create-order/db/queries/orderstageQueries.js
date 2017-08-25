const Orderstage = require('../../models/orderstageModel');
const Base = require('./baseQueries');

const getAll = () => Base.getAll(Orderstage);

const getOne = id => Base.getOne(Orderstage)(id, 'customer');

const add = album => Base.add(Orderstage)(album);

const update = (id, body) => Base.update(Orderstage)(id, body);

module.exports = { getAll, getOne, add, update };
