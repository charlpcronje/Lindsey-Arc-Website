// file: src/routes/downloads/[id]/+server.js
// version: 1.0.0

import {
    error
} from '@sveltejs/kit';
import crypto from 'crypto';
import {
    PUBLIC_DOWNLOAD_SECRET
} from '$env/static/public';
import {
    pool
} from '$lib/db.js';
import {
    requireAuth
} from '$lib/auth.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({
    params,
    url,
    request
}) {
    const user = await requireAuth(request);

    const token = url.searchParams.get('token');
    const expectedToken = crypto.createHmac('sha256', PUBLIC_DOWNLOAD_SECRET)
        .update(`${params.id}-${user.id}`)
        .digest('hex');

    if (token !== expectedToken) {
        throw error(403, 'Invalid download token');
    }

    const [rows] = await pool.query('SELECT * FROM content_uploads WHERE id = ? AND (recipient_id IS NULL OR recipient_id = ?)', [params.id, user.id]);

    if (rows.length === 0) {
        throw error(404, 'Content not found');
    }

    const upload = rows[0];

    return new Response(null, {
        status: 302,
        headers: {
            'Location': upload.path
        }
    });
}