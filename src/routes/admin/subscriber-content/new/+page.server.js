// file: src/routes/admin/subscriber-content/new/+page.server.js
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

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({
        request
    }) => {
        const user = await requireAuth(request, 'admin');

        const data = await request.formData();
        const title = data.get('title');
        const content = data.get('content');

        // Validate input
        if (!title || !content) {
            throw error(400, 'Title and content are required');
        }

        // Insert content
        await pool.query('INSERT INTO subscriber_content (title, content) VALUES (?, ?)', [title, content]);

        return json({
            success: true,
            message: 'Content uploaded successfully'
        });
    }
};