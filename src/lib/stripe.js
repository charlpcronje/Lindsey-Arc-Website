// file: src/lib/stripe.js
// version: 1.0.0

import Stripe from 'stripe';
import {
    STRIPE_SECRET_KEY
} from '$env/static/private';

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: 'your_stripe_api_version'
});