# Anomaly Detection Landing Page

A modern, responsive landing page for an anomaly detection platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI Design**: Clean, professional interface with gradient text, glass morphism effects, and responsive layout
- **Interactive Components**: Modal dialogs, animated tooltips, and interactive buttons
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Dark Mode Support**: Elegant dark mode design for better user experience
- **Performance Optimized**: Fast loading and smooth animations

## Pages

- **Home**: Main landing page with hero section, features, team members, and call-to-action
- **Blog**: Sample blog post about anomaly detection with related content
- **Legal & Privacy**: Standard legal and privacy policy pages

## Technical Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Vite**: Next-generation frontend tooling for fast development
- **Radix UI**: Unstyled, accessible components for building high-quality design systems
- **Framer Motion**: Animation library for React

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Build for production with `npm run build`

## Demo

The site features a "Book a Demo" functionality that allows potential customers to request a demonstration of the anomaly detection platform. The form collects:

- Full Name
- Company
- Email
- Additional information about their use case

Form submissions are sent via email to admin@guidingventures.com using the Resend email API.

## Email Functionality

This project includes a simulated email sending functionality for the demo request form. In a production environment, you would integrate with an email service like [Resend](https://resend.com):

1. The current implementation in `src/services/email.ts` simulates sending emails to admin@guidingventures.com
2. To implement actual email sending:
   - Install an email service SDK (e.g., `npm install resend`)
   - Update the `sendEmail` function in `src/services/email.ts` to use the actual email service
   - Set up environment variables for API keys and other sensitive information

### Implementing with Resend

To implement actual email sending with Resend:

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Create an API key in the Resend dashboard
3. Copy the `.env.example` file to `.env` and add your Resend API key
4. Verify your domain in the Resend dashboard or use the default Resend domain for testing
5. Uncomment and update the Resend implementation in `src/services/email.ts`

## Customization

The site can be easily customized by modifying the components in the `src/components` directory. The UI components are located in `src/components/ui` and can be reused throughout the application.

## License

MIT
