import { Resend } from 'resend';

// Email sending is now handled by the Netlify function

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Email sending is now handled by the Netlify function

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'An unexpected error occurred' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
