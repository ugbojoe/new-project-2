const Bookshelf = require('../bookshelf');
require('./customerModel');

const Product = Bookshelf.Model.extend({
  tableName: 'products',
  hasTimestamps: true,
  customer() {
    return this.belongsTo('Customer');
  },
});

module.exports = Bookshelf.model('Product', Product);
