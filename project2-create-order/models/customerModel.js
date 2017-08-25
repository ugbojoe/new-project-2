const Bookshelf = require('../bookshelf');
require('./customerModel');
require('./productModel');
require('./servicetypeModel');
require('./orderstageModel');

const Customer = Bookshelf.Model.extend({
  tableName: 'customers',
  hasTimestamps: true,
  products() {
    // return this.hasMany('Product', 'Servicetype', 'Orderstage', 'customer_id');
    return this.hasMany('Product', 'customer_id'); //
  },
});

module.exports = Bookshelf.model('Customer', Customer);
