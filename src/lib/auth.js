// file: src/lib/auth.js
// version: 1.0.0

import {
    pool
} from '$lib/db.js';

export async function requireAuth(request, requiredRole = 'user') {
    const userId = request.cookies.get('session');
    if (!userId) {
        throw error(401, 'Unauthorized');
    }

    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);
    if (rows.length === 0) {
        throw error(401, 'Unauthorized');
    }

    const user = rows[0];
    if (requiredRole === 'subscriber' && user.role !== 'subscriber' && user.role !== 'admin') {
        throw error(403, 'Forbidden');
    }
    if (requiredRole === 'admin' && user.role !== 'admin') {
        throw error(403, 'Forbidden');
    }

    return user;
}