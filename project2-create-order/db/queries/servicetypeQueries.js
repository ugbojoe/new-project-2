const Servicetype = require('../../models/servicetypeModel');
const Base = require('./baseQueries');

const getAll = () => Base.getAll(Servicetype);

const getOne = id => Base.getOne(Servicetype)(id, 'customer');

const add = album => Base.add(Servicetype)(album);

const update = (id, body) => Base.update(Servicetype)(id, body);

module.exports = { getAll, getOne, add, update };
