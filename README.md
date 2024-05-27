# Lindsey Arc Website

Welcome to the Lindsey Arc Website! This is a Progressive Web App (PWA) built using SvelteKit, Tailwind CSS, and MariaDB. It provides a platform for Lindsey Arc, to connect with her audience, share exclusive content, and manage subscriptions.

This project is being created with the help of Claude AI by supplying it with the [Sveltekit Documentation](./docs/sveltekit-documentation.md) and the [Lindsey Arc Website Requirements](./docs/lindsey-arc-website-requirements.md). Claude AI generated the basic code for the project entire website with the spec above, the full code here: [Full code response](./docs/codeByClaude.md)

## Features

1. **User Registration and Authentication**: Users can create an account, log in, and manage their profile.

2. **Blog Posts**: Lindsey can create, edit, and delete blog posts. Users can read and comment on these posts, while Lindsey has the ability to moderate comments.

3. **Subscriber-Only Content**: Subscribers gain access to exclusive content that is hidden from regular users.

4. **Custom Content Requests**: Users can submit requests for custom content, which Lindsey can review and fulfill.

5. **Content Upload**: Lindsey can upload content for all subscribers or specific individuals, with secure download links.

6. **Payment Integration**: The website supports subscription plans and one-time payments using Stripe as the payment provider.

7. **Automated Emails**: Users receive automated emails for key actions such as registration, new content uploads, comments, and password resets.

8. **Lost Password Functionality**: Users can request a password reset via email if they forget their password.

9. **Responsive Design**: The website is built using Tailwind CSS, ensuring a responsive and mobile-friendly layout across devices.

10. **PWA Features**: The website is installable as a Progressive Web App, allowing for offline access and an app-like experience.

## Technologies Used

- **Frontend & Backend**: SvelteKit
- **Database**: MariaDB
- **Styling**: Tailwind CSS
- **Payment Provider**: Stripe
- **Automated Emails**: SendGrid

## Getting Started

To set up the Lindsey Arc Website locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/lindsey-arc.git
   ```

2. Install dependencies:
   ```
   cd lindsey-arc
   npm install
   ```

3. Set up the database:
   - Create a MariaDB database for the project.
   - Update the database configuration in `src/lib/db.js` with your database credentials.

4. Configure environment variables:
   - Create a `.env` file in the project root.
   - Add the following variables with your own values:
     ```
     STRIPE_SECRET_KEY=your_stripe_secret_key
     SENDGRID_API_KEY=your_sendgrid_api_key
     ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open the website in your browser at `http://localhost:5173`.

## Testing

To ensure the quality and reliability of the Lindsey Arc Website, it's important to perform testing during development. Here are a few recommended testing approaches:

1. **Unit Testing**: Write unit tests for individual components, functions, and modules using a testing framework like [Vitest](https://vitest.dev/). Run the tests regularly to catch any regressions or errors.

2. **Integration Testing**: Test the interaction between different components and modules to ensure they work together as expected. Use tools like [Playwright](https://playwright.dev/) or [Cypress](https://www.cypress.io/) for end-to-end testing.

3. **Manual Testing**: Perform manual testing by navigating through the website, testing various features, and verifying the expected behavior. Test on different devices and browsers to ensure compatibility.

4. **Accessibility Testing**: Use accessibility testing tools like [axe](https://www.deque.com/axe/) to identify and fix any accessibility issues in the website.

5. **Performance Testing**: Analyze the website's performance using tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse) to identify areas for optimization.

6. **Security Testing**: Conduct security audits and penetration testing to identify and address any vulnerabilities in the website.

## Building Mobile Apps

To compile the Lindsey Arc Website into Android and iOS apps, you can use tools like [Capacitor](https://capacitorjs.com/) or [Cordova](https://cordova.apache.org/). These tools allow you to package your web app into native mobile apps.

Here's a general outline of the steps involved:

1. Install the necessary dependencies:
   ```
   npm install @capacitor/core @capacitor/cli
   ```

2. Initialize Capacitor in your project:
   ```
   npx cap init
   ```

3. Build your SvelteKit app for production:
   ```
   npm run build
   ```

4. Add the desired mobile platforms:
   ```
   npx cap add android
   npx cap add ios
   ```

5. Sync your web app with the native projects:
   ```
   npx cap sync
   ```

6. Open the native projects in their respective IDEs:
   ```
   npx cap open android
   npx cap open ios
   ```

7. Build and run the mobile apps using the native IDEs (Android Studio for Android, Xcode for iOS).

Note that building mobile apps may require additional configuration and setup specific to each platform. Refer to the Capacitor or Cordova documentation for detailed instructions on customizing and optimizing your mobile apps.

## Deployment

The Lindsey Arc Website is deployed using Vercel. To deploy your own instance:

1. Create a Vercel account and install the Vercel CLI.

2. Run the following command in your project directory:
   ```
   vercel
   ```

3. Follow the prompts to link your project to Vercel and choose your deployment settings.

4. Set up the necessary environment variables in the Vercel dashboard.

Vercel will automatically build and deploy your application whenever you push changes to your linked Git repository.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact lindsey@example.com.

Enjoy using the Lindsey Arc Website!