'use strict';

import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: 'tarasbondaruk',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

const setData = () => {};
const getData = async () => {
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM banks');
    client.end();
    return rows;
};

//console.log('Database: ', await getData());

export { setData, getData };
