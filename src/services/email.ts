// Email service for sending form data to admin@guidingventures.com
// In a production environment, this would use a real email service like Resend

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
    const { name, email, company, message } = data;
    
    // Log the email data that would be sent
    console.log('Sending email to admin@guidingventures.com');
    console.log('From:', 'Anomaly Detection <noreply@anomalydetection.app>');
    console.log('Subject:', `New Demo Request from ${name}`);
    console.log('Body:', `
      <h1>New Demo Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
    `);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, this would be:
    // const { data, error } = await resend.emails.send({
    //   from: 'Anomaly Detection <noreply@anomalydetection.app>',
    //   to: ['admin@guidingventures.com'],
    //   subject: `New Demo Request from ${name}`,
    //   html: `...email content...`,
    // });
    
    // Simulate successful response
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}
