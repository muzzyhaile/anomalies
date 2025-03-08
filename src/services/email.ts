// Email service for sending form data to admin@guidingventures.com
// In a production environment, this would use a real email service like Resend

import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  company?: string;
  message?: string;
}

/**
 * Simulates sending an email with form data
 * In a production environment, this would use the Resend API
 * to send an actual email to admin@guidingventures.com
 */
export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Sending email with payload:', JSON.stringify(data));

    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Email sending error:', errorResponse);
      throw new Error(JSON.stringify(errorResponse));
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}
