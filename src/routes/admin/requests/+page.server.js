// file: src/routes/admin/requests/+page.server.js
// version: 1.0.0

import {
    json,
    error
} from '@sveltejs/kit';
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
    await requireAuth(request, 'admin');

    const [rows] = await pool.query('SELECT * FROM content_requests ORDER BY created_at DESC');

    return {
        requests: rows
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    update: async ({
        request
    }) => {
        await requireAuth(request, 'admin');

        const data = await request.formData();
        const id = data.get('id');
        const status = data.get('status');

        // Validate input
        if (!id || !status) {
            throw error(400, 'ID and status are required');
        }

        // Update request
        await pool.query('UPDATE content_requests SET status = ? WHERE id = ?', [status, id]);

        return json({
            success: true,
            message: 'Request updated successfully'
        });
    }
};