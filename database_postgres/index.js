const { Client } = require('pg');

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "products"
});

client.connect()

client.query('SELECT * FROM products WHERE id = 69')
.then((response) => { console.log('response: ', response.rows) })
.catch((err) => { console.log('error querying database: ', err) })
.finally(() => { client.end() })
