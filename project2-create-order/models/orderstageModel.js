const Bookshelf = require('../bookshelf');
require('./customerModel');

const Orderstage = Bookshelf.Model.extend({
  tableName: 'orderstage',
  hasTimestamps: true,
  customer() {
    return this.belongsTo('Customer');
  },
});

module.exports = Bookshelf.model('Orderstage', Orderstage);
