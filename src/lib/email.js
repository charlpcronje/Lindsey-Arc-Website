// file: src/lib/email.js
// version: 1.0.0
/*
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    // Configure your email service (e.g., SendGrid, Mailgun)
    // Example for Gmail:
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
});

export async function sendEmail(to, subject, text) {
    const mailOptions = {
        from: 'your_email@gmail.com',
        to,
        subject,
        text
    };

    await transporter.sendMail(mailOptions);
}

*/

// file: src/lib/email.js
// version: 1.0.0

import sgMail from '@sendgrid/mail';
import {
    SENDGRID_API_KEY
} from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function sendEmail(to, subject, text, html) {
    const msg = {
        to,
        from: 'your_email@example.com',
        subject,
        text,
        html
    };

    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);
    }
}