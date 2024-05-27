// file: src/routes/auth/register/+page.server.js
// version: 1.0.0

import {
    json,
    error
} from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import {
    pool
} from '$lib/db.js';
import {
    sendEmail
} from '$lib/email.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({
        request
    }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        // Validate input
        if (!email || !password) {
            throw error(400, 'Email and password are required');
        }

        // Check if user already exists
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            throw error(400, 'User with this email already exists');
        }

        // Hash password and insert user
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

        // Send welcome email
        await sendEmail(
            email,
            'Welcome to Lindsey Arc',
            'Thank you for registering!',
            '<h1>Welcome to Lindsey Arc</h1><p>Thank you for registering!</p>'
        );

        return json({
            success: true,
            message: 'User registered successfully'
        });
    }
};