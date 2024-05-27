// file: src/routes/subscriptions/+page.server.js
// version: 1.0.0

import {
    stripe
} from '$lib/stripe.js';
import {
    requireAuth
} from '$lib/auth.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({
    request
}) {
    const user = await requireAuth(request);

    const [rows] = await pool.query('SELECT * FROM subscriptions WHERE user_id = ?', [user.id]);
    const subscription = rows[0] || null;

    return {
        subscription
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    subscribe: async ({
        request
    }) => {
        const user = await requireAuth(request);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: 'your_subscription_price_id',
                quantity: 1
            }],
            mode: 'subscription',
            success_url: `${url.origin}/subscriptions?success=true`,
            cancel_url: `${url.origin}/subscriptions`
        });

        throw redirect(303, session.url);
    },

    cancel: async ({
        request
    }) => {
        const user = await requireAuth(request);

        const [rows] = await pool.query('SELECT * FROM subscriptions WHERE user_id = ?', [user.id]);
        const subscription = rows[0];

        if (subscription) {
            await stripe.subscriptions.del(subscription.stripe_subscription_id);
            await pool.query('DELETE FROM subscriptions WHERE id = ?', [subscription.id]);
        }

        return {
            success: true
        };
    },

    payment: async ({
        request
    }) => {
        const user = await requireAuth(request);

        const data = await request.formData();
        const amount = data.get('amount');

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    unit_amount: Math.round(Number(amount) * 100),
                    product_data: {
                        name: 'One-time Payment'
                    }
                },
                quantity: 1
            }],
            mode: 'payment',
            success_url: `${url.origin}/subscriptions?success=true`,
            cancel_url: `${url.origin}/subscriptions`
        });

        throw redirect(303, session.url);
    }
};