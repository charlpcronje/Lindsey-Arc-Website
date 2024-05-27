// file: src/routes/auth/login/+page.server.js
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
        request,
        cookies
    }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        // Validate input
        if (!email || !password) {
            throw error(400, 'Email and password are required');
        }

        // Check if user exists
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) {
            throw error(400, 'Invalid email or password');
        }

        // Verify password
        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw error(400, 'Invalid email or password');
        }

        // Set session cookie
        cookies.set('session', user.id, {
            path: '/'
        });

        return json({
            success: true,
            message: 'Logged in successfully'
        });
    }
};