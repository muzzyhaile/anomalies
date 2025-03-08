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
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email');
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
