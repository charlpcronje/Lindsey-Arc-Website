// file: src/routes/requests/new/+page.server.js
// version: 1.0.1

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
import {
    sendEmail
} from '$lib/email.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({
        request
    }) => {
        const user = await requireAuth(request);

        const data = await request.formData();
        const title = data.get('title');
        const description = data.get('description');

        // Validate input
        if (!title || !description) {
            throw error(400, 'Title and description are required');
        }

        // Insert request
        await pool.query('INSERT INTO content_requests (user_id, title, description) VALUES (?, ?, ?)', [user.id, title, description]);

        // Send email notification
        await sendEmail('admin@example.com', 'New Content Request', `A new content request has been submitted:\n\nTitle: ${title}\nDescription: ${description}`);

        return json({
            success: true,
            message: 'Request submitted successfully'
        });
    }
};