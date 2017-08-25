const Customer = require('../../models/customerModel');
const Product = require('../../models/productModel');
const Servicetype = require('../../models/servicetypeModel');
const Orderstage = require('../../models/orderstageModel');

function deleteAll(model) {
  return model.where('id', '!=', 0).destroy();
}

async function seed() {
  await deleteAll(Product);       // DELETE all of the products.
  await deleteAll(Servicetype);      // DELETE all of the customers.
  await deleteAll(Orderstage);      // DELETE all of the customers.
  await deleteAll(Customer);      // DELETE all of the customers.

const [C1, C2, C3, C4, C5, C6, C7, C8] = await Promise.all([
  new Customer({
    customer_code: '10000003', first_name: 'Sufjan', last_name: 'Stevens', phone_number: '1234567890', email: 'email@email.com', delivery_address: '123 My Street', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '12340'
  }).save(),
  new Customer({
    customer_code: '10000004', first_name: 'Stev', last_name: 'Sufjan', phone_number: '9234567891', email: 'any@email.com', delivery_address: '456 My Street', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '98765'
  }).save(),
  new Customer({
    customer_code: '10000005', first_name: 'John', last_name: 'Sufjan', phone_number: '9234567345', email: 'jim@email.com', delivery_address: '456 My Street', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '78694'
  }).save(),
  new Customer({
    customer_code: '10000006', first_name: 'John', last_name: 'Stone', phone_number: '6786452381', email: 'john@email.com', delivery_address: '1102 stone drive', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '30081'
  }).save(),
  new Customer({
    customer_code: '10000007', first_name: 'Mary', last_name: 'Dan', phone_number: '4045676533', email: 'Mary@email.com', delivery_address: '302 Dan pkwy drive', delivery_city: 'Marietta', delivery_state: 'GA', delivery_zip: '30064'
  }).save(),
  new Customer({
    customer_code: '10000008', first_name: 'Stone ', last_name: 'Lee', phone_number: '7703457654', email: 'lee@email.com', delivery_address: '1302 sanlee pkwy drive', delivery_city: 'Marietta', delivery_state: 'GA', delivery_zip: '30062'
  }).save(),
  new Customer({
    customer_code: '10000009', first_name: 'Lary', last_name: 'Paul', phone_number: '6780012090', email: 'lary@email.com', delivery_address: '3022 Dano drive', delivery_city: 'Atlanta', delivery_state: 'GA', delivery_zip: '30064'
  }).save(),
  new Customer({
    customer_code: '10000010', first_name: 'Tommy', last_name: 'Lee', phone_number: '4042007200', email: 'tommylee@email.com', delivery_address: '3202 Tommy Lee pkwy drive', delivery_city: 'Marietta', delivery_state: 'GA', delivery_zip: '30064'
  }).save()
]);

  await Promise.all([
    C1.products().create({ sku_number: '1400000000', product_desc: 'Ring Security Doorbell', price: '199' }),
    C2.products().create({ sku_number: '1400000001', product_desc: 'Ring Security Floodlights', price: '249' }),
    C3.products().create({ sku_number: '1400000002', product_desc: 'Nest Thermostat', price: '199' }),
    C4.products().create({ sku_number: '1400000003', product_desc: 'Ecosmart 100W A19 LED Soft white bulb', price: '19' }),
    C5.products().create({ sku_number: '1400000004', product_desc: 'Ecosmart 75W A19 LED Soft white bulb', price: '15' }),
    C6.products().create({ sku_number: '1400000005', product_desc: 'Ecosmart 65W  BR30 LED Soft white bulb', price: '25' }),
    C7.products().create({ sku_number: '1400000006', product_desc: 'Ecosmart 65W  BR40 LED Daylight bulb', price: '99' }),
    C8.products().create({ sku_number: '1400000007', product_desc: 'Ecosmart 60W  A19 LED soft white bulb', price: '24' })
  ]);

  await Promise.all([
    C1.servicetype().create({ service_type: 'will call' }),
    C2.servicetype().create({ service_type: 'store delivery' }),
    C3.servicetype().create({ service_type: 'customer carryout' }),
    C4.servicetype().create({ service_type: 'will call' }),
    C5.servicetype().create({ service_type: 'store delivery' }),
    C6.servicetype().create({ service_type: 'customer carryout' }),
    C7.servicetype().create({ service_type: 'will call' }),
    C8.servicetype().create({ service_type: 'store delivery' })
  ]);

  await Promise.all([
    C1.orderstage().create(),
    C2.orderstage().create(),
    C3.orderstage().create(),
    C4.orderstage().create(),
    C5.orderstage().create(),
    C6.orderstage().create(),
    C7.orderstage().create(),
    C8.orderstage().create()
  ]);

  // disconnect from database
  process.exit(0);
  // bookshelf.knex.destroy().then( () => console.log('db connections destroyed'));
}

try {
  seed();
} catch (err) {
  console.error('ERROR:', err);
  process.exit(1);
}
