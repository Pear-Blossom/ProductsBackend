const { Client } = require('pg');

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "products"
});

client.connect()

client.query('SELECT NOW()')
.then((response) => { console.log(response) })
.catch((err) => { console.log(err) })
.finally(() => { client.end() })