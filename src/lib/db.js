// file: src/lib/db.js 
// version: 1.0.0

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'lindsey_arc_user',
    password: 'your_password',
    database: 'lindsey_arc'
});

export {
    pool
};