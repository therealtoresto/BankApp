'use strict';

import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: 'tarasbondaruk',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});
const insert = 'INSERT INTO banks( ' + 
    'bank_name,' +
    'interest_rate,' +
    'maximum_loan,' +
    'minimum_down_payment,' +
    'loan_term) VALUES($1, $2, $3, $4, $5) RETURNING *';

const setData = async ( data ) => {
    try {
        const client = await pool.connect();
        for (let i = 1; i < data.length; i++) {
            data[i] = +data[i];
        }
        console.log('Added to batabase:', data);
        const res = await pool.query(insert, data)
    } catch (err) {
        console.log(err.stack);
    }
};
const getData = async () => {
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM banks');
    client.end();
    return rows;
};

//console.log('Database: ', await getData());

export { setData, getData };
