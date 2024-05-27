# Lindsey Arc
Lindsey Arc is an adult influencer who has a blog and offers exclusive content to her subscribers. She wants to create a Progressive Web App (PWA) that allows users to access her blog and exclusive content on their mobile devices. 

## Project Overview
Project Name: Lindsey Arc
Create a responsive Progressive Web App (PWA) for an adult influencer with the following functionalities:

1. Blog posts with comment moderation.
2. Subscriber-only section.
3. Custom content requests.
4. Upload content for all subscribers and specific individuals with secure download links.
5. Payment provider integration for subscriptions and one-time payments.
6. Automated emails for key actions.
7. Lost password functionality.

### Technologies
- **Frontend & Backend**: SvelteKit
- **Database**: MariaDB
- **Styling**: Tailwind CSS
- **Payment Provider**: (Choose a payment provider like Stripe or PayPal)
- **Automated Emails**: (Use an email service like SendGrid or Mailgun)

### Pages and Functionalities

#### 1. Landing Page
- **Header with Navigation**
  - Home
  - My Blog
  - Subscribe
  - Make a Request
  - Subscriber Options
  - Login / Logout
  - Contact Me

#### 2. Blog Posts
- Create, edit, and delete blog posts.
- Allow users to comment on posts.
- Comments must be approved by the site owner before being visible.

#### 3. Subscriber Only Section
- Accessible only to logged-in subscribers.
- Exclusive content for subscribers.

#### 4. Custom Content Requests
- Form for users to request custom content.
- Admin interface to manage and fulfill requests.

#### 5. Content Upload
- Upload content for all subscribers.
- Upload content for specific individuals with secure download links.

#### 6. Payment Integration
- Handle subscriptions and one-time payments securely.
- Implement subscription management.

#### 7. Automated Emails
- Notifications for new content, requests, comments, and password resets.
- Use an email service for sending automated emails.

#### 8. Lost Password Functionality
- Form to request a password reset.
- Secure email verification process.

### Detailed Functional Requirements

#### Authentication and Authorization
- User registration and login functionality.
- Subscriber role with access to exclusive content.
- Admin role for content management and request handling.

#### Custom Content Requests
- Form with fields for request details (type of content, description, etc.).
- Admin dashboard to view and manage requests.
- Notification emails for new requests and updates.

#### Content Upload and Management
- Interface for uploading content (images, videos, documents).
- Option to specify if content is for all subscribers or specific individuals.
- Generate secure download links for specific content.

#### Payment Provider Integration
- Integrate a payment provider (e.g., Stripe) for handling transactions.
- Subscription plans and one-time payment options.
- Secure payment processing and subscription management.

#### Blog and Comments
- Rich text editor for creating blog posts.
- Display blog posts with pagination.
- Comment section under each post.
- Comment moderation by the site owner.

#### Automated Emails
- Send welcome emails upon registration.
- Notification emails for new content, comments, and requests.
- Password reset emails with secure links.

#### Responsive Design and PWA Features
- Use Tailwind CSS for responsive design.
- Implement PWA features for offline access and an app-like experience.

### API Endpoints

#### Authentication
- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Login a user.
- `POST /auth/logout` - Logout a user.

#### User Management
- `GET /users/me` - Get current user profile.
- `PUT /users/me` - Update current user profile.

#### Blog Posts
- `GET /posts` - Get all blog posts.
- `GET /posts/:id` - Get a single blog post.
- `POST /posts` - Create a new blog post.
- `PUT /posts/:id` - Update a blog post.
- `DELETE /posts/:id` - Delete a blog post.

#### Comments
- `GET /posts/:postId/comments` - Get comments for a post.
- `POST /posts/:postId/comments` - Create a new comment.
- `PUT /comments/:id` - Update a comment.
- `DELETE /comments/:id` - Delete a comment.
- `POST /comments/:id/approve` - Approve a comment.

#### Content Requests
- `GET /requests` - Get all content requests.
- `POST /requests` - Create a new content request.
- `PUT /requests/:id` - Update a content request.
- `DELETE /requests/:id` - Delete a content request.

#### Content Uploads
- `POST /uploads` - Upload new content.
- `GET /uploads/:id` - Get a specific content item.
- `DELETE /uploads/:id` - Delete a content item.

#### Payments
- `POST /payments` - Create a new payment.
- `GET /payments` - Get all payments.
- `GET /payments/:id` - Get a specific payment.
- `DELETE /payments/:id` - Delete a payment.

#### Password Reset
- `POST /auth/forgot-password` - Request a password reset.
- `POST /auth/reset-password` - Reset the password.

### Development and Deployment
- Set up a SvelteKit project with Tailwind CSS for frontend and backend development.
- Configure MariaDB for database management.
- Integrate the chosen payment provider.
- Set up email service for automated emails.
- Ensure responsive design and PWA functionality.
- Deploy the application to a hosting service that supports both frontend and backend technologies.

### Task Breakdown

#### Task 1: Project Setup
1.1. Initialize a new SvelteKit project.
1.2. Set up Tailwind CSS in the SvelteKit project.
1.3. Configure MariaDB for the project.

#### Task 2: Authentication and Authorization
2.1. Implement user registration.
2.2. Implement user login and logout.
2.3. Create roles for subscribers and admins.
2.4. Implement access control for subscriber-only content.

#### Task 3: Blog Posts
3.1. Create the blog post model in MariaDB.
3.2. Implement the blog post creation form.
3.3. Develop the blog post listing page.
3.4. Implement the single blog post view.
3.5. Add comment functionality with moderation.

#### Task 4: Subscriber Only Section
4.1. Create the subscriber-only content model in MariaDB.
4.2. Implement the subscriber-only content upload form.
4.3. Develop the subscriber-only content listing page.

#### Task 5: Custom Content Requests
5.1. Create the content request model in MariaDB.
5.2. Implement the content request form.
5.3. Develop the admin interface for managing requests.
5.4. Set up email notifications for new requests and updates.

#### Task 6: Content Upload
6.1. Create the content upload model in MariaDB.
6.2. Implement the content upload form.
6.3. Develop the content listing page.
6.4. Implement secure download links for specific content.

#### Task 7: Payment Integration
7.1. Choose and integrate a payment provider.
7.2. Implement subscription plans and one-time payment options.
7.3. Develop the payment processing flow.
7.4. Implement subscription management.

#### Task 8: Automated Emails
8.1. Set up an email service (e.g., SendGrid, Mailgun).
8.2. Implement email notifications for key actions (registration, new content, comments, requests).

#### Task 9: Responsive Design and PWA
9.1. Apply Tailwind CSS for responsive design.
9.2. Implement PWA features (offline access, add to home screen).

#### Task 10: Deployment
10.1. Choose a hosting service (e.g., Vercel, Netlify).
10.2. Deploy the SvelteKit project.
10.3. Set up continuous integration and deployment (CI/CD) pipelines.


Now that we have all the tasks down I want you to take note of the following:
- Always add the relative file path to the first line of every file
- Always give the complete production ready code for each file with no placeholders or omissions
- Always make sure the code is clean and well formatted
- Always add comments to explain the code and make it easy to understand
- Always add a version number to the top of every file and update it each time you make a change
- Make sure there is validation for all forms and inputs
- Make sure you use the correct HTTP methods for each API endpoint
- Make sure that you  following the documentation for SvelteKit I provided

At the end and at the beginning of each of your responses I want you to state on which task you are and what is next
.3