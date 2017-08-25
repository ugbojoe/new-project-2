exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('customers', table => {
    table.increments('id').primary();
    // table.string('name').unique();
    table.integer('customer_code').notNull();
    table.string('first_name', 30).notNull();
    table.string('last_name', 30).notNull();
    table.string('phone_number', 15).notNull();
    table.string('email', 30);
    table.string('delivery_address', 30);
    table.string('delivery_city', 50);
    table.string('delivery_state', 2);
    table.string('delivery_zip', 10);
    table.timestamps(true, true);
  })
  .then(() => knex.schema.createTableIfNotExists('products', table => {
    table.increments('id').primary();
    table.integer('sku_number', 10).notNull();
    table.string('product_desc', 100);
    table.integer('price', 15).notNull();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('products', table => {
    table.integer('customer_id').unsigned();
    table.foreign('customer_id').references('customers.id');
  }))
  .then(() => knex.schema.createTableIfNotExists('servicetype', table => {
    table.increments('id').primary();
    table.string('service_type', 20).notNull();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('servicetype', table => {
    table.integer('customer_id').unsigned();
    table.foreign('customer_id').references('customers.id');
  }))
  .then(() => knex.schema.createTableIfNotExists('orderstage', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
  }))
  .then(() => knex.schema.table('orderstage', table => {
    table.integer('customer_id').unsigned();
    table.foreign('customer_id').references('customers.id');
  }));
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('customers'),
    knex.schema.dropTableIfExists('products'),
    knex.schema.dropTableIfExists('servicetype'),
    knex.schema.dropTableIfExists('orderstage')
  ]);
};
