// file: src/routes/blog/[id]/+page.server.js
// version: 1.0.0

import {
    error
} from '@sveltejs/kit';
import {
    pool
} from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({
    params
}) {
    const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [params.id]);

    if (rows.length === 0) {
        throw error(404, 'Post not found');
    }

    return {
        post: rows[0]
    };
}