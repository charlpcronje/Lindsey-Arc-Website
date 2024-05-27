// file: src/routes/uploads/+page.server.js
// version: 1.0.0

import {
    pool
} from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const [rows] = await pool.query(`
        SELECT cu.*, u.email 
        FROM content_uploads cu
        JOIN users u ON cu.user_id = u.id
        ORDER BY cu.created_at DESC
    `);

    return {
        uploads: rows.map(row => ({
            ...row,
            user: {
                email: row.email
            }
        }))
    };
}