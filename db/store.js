const Store = require('openrecord/store/postgres');

const store = new Store({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  models: []
});

module.exports = store;
