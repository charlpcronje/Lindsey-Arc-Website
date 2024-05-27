// file: src/routes/uploads/new/+page.server.js
// version: 1.0.1

import {
    json,
    error
} from '@sveltejs/kit';
import {
    v4 as uuidv4
} from 'uuid';
import {
    requireAuth
} from '$lib/auth.js';
import {
    uploadContent
} from '$lib/content.js';
import {
    generateDownloadLink
} from '$lib/utils.js';
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
        const file = data.get('file');
        const recipientEmail = data.get('recipient_email');

        // Validate input
        if (!title || !file) {
            throw error(400, 'Title and file are required');
        }

        const filename = `${uuidv4()}-${file.name}`;
        const path = `/uploads/${filename}`;

        // Upload file
        await uploadContent(file, filename);

        let recipientId = null;
        if (recipientEmail) {
            const [rows] = await pool.query('SELECT id FROM users WHERE email = ?', [recipientEmail]);
            if (rows.length > 0) {
                recipientId = rows[0].id;
            }
        }

        // Insert content record
        await pool.query('INSERT INTO content_uploads (title, filename, path, user_id, recipient_id) VALUES (?, ?, ?, ?, ?)', [title, filename, path, user.id, recipientId]);

        // Send notification email
        if (recipientId) {
            const [rows] = await pool.query('SELECT email FROM users WHERE id = ?', [recipientId]);
            const recipientEmail = rows[0].email;

            await sendEmail(
                recipientEmail,
                'New Content Available',
                `New content has been uploaded for you: ${title}`,
                `<h1>New Content Available</h1><p>New content has been uploaded for you: ${title}</p><p><a href="${generateDownloadLink(uploadId, recipientId)}">Download</a></p>`
            );
        }

        return json({
            success: true,
            message: 'Content uploaded successfully'
        });
    }
};