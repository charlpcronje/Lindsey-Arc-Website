// file: src/routes/admin/comments/+page.server.js  
// version: 1.0.0

import {
    error,
    json
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

    const [rows] = await pool.query('SELECT * FROM comments WHERE approved = FALSE');

    return {
        comments: rows
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    approve: async ({
        request
    }) => {
        await requireAuth(request, 'admin');

        const data = await request.formData();
        const id = data.get('id');

        await pool.query('UPDATE comments SET approved = TRUE WHERE id = ?', [id]);

        return json({
            success: true
        });
    },
    delete: async ({
        request
    }) => {
        await requireAuth(request, 'admin');

        const data = await request.formData();
        const id = data.get('id');

        await pool.query('DELETE FROM comments WHERE id = ?', [id]);

        return json({
            success: true
        });
    }
};