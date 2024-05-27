// file: src/routes/subscriber/content/+page.server.js
// version: 1.0.0

import {
    pool
} from '$lib/db.js';
import {
    requireAuth
} from '$lib/auth.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({
    request
}) {
    const user = await requireAuth(request, 'subscriber');

    const [rows] = await pool.query('SELECT * FROM subscriber_content ORDER BY created_at DESC');

    return {
        content: rows
    };
}