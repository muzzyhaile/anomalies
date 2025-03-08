import fetch from 'node-fetch';

exports.handler = async (event) => {
  try {
    const { name, email, company, message } = JSON.parse(event.body);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VITE_RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'admin@guidingventures.com',
        subject: 'New Demo Request',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company || 'N/A'}</p><p>Message: ${message || 'N/A'}</p>`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
