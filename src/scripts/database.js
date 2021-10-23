'use strict';

const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'tarasbondaruk',
    database: 'tarasbondaruk',
    port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
    //console.log(err, res)
    pool.end()
})
const client = new Client({
    user: 'tarasbondaruk',
    database: 'tarasbondaruk',
    port: 5432,
})
client.connect()
client
  //.query('SELECT NOW() as now')
  .query('SELECT * from city')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))