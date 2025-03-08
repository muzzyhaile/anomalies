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
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'admin@guidingventures.com',
      subject: 'New Demo Request',
      html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Company: ${data.company || 'N/A'}</p><p>Message: ${data.message || 'N/A'}</p>`,
    });

    if (!response.data) {
      throw new Error(response.error?.message || 'Failed to send email');
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
