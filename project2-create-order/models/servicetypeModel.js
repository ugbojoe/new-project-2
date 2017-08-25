const Bookshelf = require('../bookshelf');
require('./customerModel');

const Servicetype = Bookshelf.Model.extend({
  tableName: 'servicetype',
  hasTimestamps: true,
  customer() {
    return this.belongsTo('Customer');
  },
});

module.exports = Bookshelf.model('Servicetype', Servicetype);
