// file: src/routes/auth/forgot-password/+page.server.js
// version: 1.0.0

import {
    json,
    error
} from '@sveltejs/kit';
import crypto from 'crypto';
import {
    pool
} from '$lib/db.js';
import {
    sendEmail
} from '$lib/email.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({
        request,
        url
    }) => {
        const data = await request.formData();
        const email = data.get('email');

        // Validate input
        if (!email) {
            throw error(400, 'Email is required');
        }

        // Check if user exists
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) {
            throw error(400, 'User with this email does not exist');
        }

        const user = rows[0];

        // Generate password reset token
        const token = crypto.randomBytes(32).toString('hex');
        await pool.query('INSERT INTO password_reset_tokens (user_id, token) VALUES (?, ?)', [user.id, token]);

        // Send password reset email
        const resetUrl = `${url.origin}/auth/reset-password?token=${token}`;
        await sendEmail(
            email,
            'Password Reset Request',
            `Click the link to reset your password: ${resetUrl}`,
            `<h1>Password Reset Request</h1><p>Click the link to reset your password: <a href="${resetUrl}">${resetUrl}</a></p>`
        );

        return json({
            success: true,
            message: 'Password reset email sent'
        });
    }
};