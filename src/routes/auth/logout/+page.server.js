// file: src/routes/auth/logout/+page.server.js
// version: 1.0.0

import {
    json
} from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({
        cookies
    }) => {
        cookies.delete('session', {
            path: '/'
        });
        return json({
            success: true,
            message: 'Logged out successfully'
        });
    }
};