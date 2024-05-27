// file: src/routes/blog/+page.server.js
// version: 1.0.0

import {
    pool
} from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const [rows] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    return {
        posts: rows
    };
}