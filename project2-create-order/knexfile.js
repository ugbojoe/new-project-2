const db = 'createorderdb';
const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    debug: false,
    connection: {
      host: '127.0.0.1',
      database: `${db}_dev`,
      charset: 'utf8'
    },
    migrations: {
      directory: path.join('db', 'migrations')
    },
    seeds: {
      directory: path.join('db', 'seeds')
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: `${db}_test`,
      charset: 'utf8'
    },
    migrations: {
      directory: path.join('db', 'migrations')
    },
    seeds: {
      directory: path.join('db', 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    },
    migrations: {
      directory: path.join('db', 'migrations')
    },
    seeds: {
      directory: path.join('db', 'seeds')
    }
  }
};
