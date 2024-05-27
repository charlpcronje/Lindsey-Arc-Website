// file: src/routes/auth/reset-password/+page.server.js
// version: 1.0.0

import {
    json,
    error
} from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import {
    pool
} from '$lib/db.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({
        request
    }) => {
        const data = await request.formData();
        const token = data.get('token');
        const password = data.get('password');

        // Validate input
        if (!token || !password) {
            throw error(400, 'Token and password are required');
        }

        // Check if token is valid
        const [rows] = await pool.query('SELECT * FROM password_reset_tokens WHERE token = ?', [token]);
        if (rows.length === 0) {
            throw error(400, 'Invalid or expired token');
        }

        const resetToken = rows[0];

        // Update user password
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, resetToken.user_id]);

        // Delete used token
        await pool.query('DELETE FROM password_reset_tokens WHERE id = ?', [resetToken.id]);

        return json({
            success: true,
            message: 'Password reset successfully'
        });
    }
};