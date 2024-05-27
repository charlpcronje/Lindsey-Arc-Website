// file: src/routes/stripe/webhooks/+server.js
// version: 1.0.0

import {
    stripe
} from '$lib/stripe.js';
import {
    pool
} from '$lib/db.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({
    request
}) {
    const rawBody = await request.text();
    const signature = request.headers.get('stripe-signature');

    let event;

    try {
        event = stripe.webhooks.constructEvent(rawBody, signature, 'your_webhook_secret');
    } catch (err) {
        console.error(err);
        return new Response(null, {
            status: 400
        });
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;

            if (session.mode === 'subscription') {
                const subscription = await stripe.subscriptions.retrieve(session.subscription);
                const [rows] = await pool.query('SELECT id FROM users WHERE email = ?', [subscription.customer.email]);
                const userId = rows[0].id;

                await pool.query('INSERT INTO subscriptions (user_id, stripe_subscription_id, status) VALUES (?, ?, ?)', [userId, subscription.id, subscription.status]);
            }
            break;

        case 'customer.subscription.deleted':
            const subscription = event.data.object;
            await pool.query('DELETE FROM subscriptions WHERE stripe_subscription_id = ?', [subscription.id]);
            break;
    }

    return new Response(null, {
        status: 200
    });
}