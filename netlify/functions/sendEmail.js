const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const formData = JSON.parse(event.body);

    const emailPayload = {
      from: 'Anomaly Detection <notifications@anomalydetection.app>',
      to: ['haile.mussie@googlemail.com'],
      reply_to: formData.email,
      subject: `New contact from ${formData.name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `
    };

    console.log('Sending email with payload:', JSON.stringify(emailPayload));

    const apiKey = process.env.RESEND_API_KEY.trim();
    const response = await axios.post('https://api.resend.com/emails', emailPayload, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Resend API response:', response.data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully" })
    };
  } catch (error) {
    console.error('Netlify function error:', error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: error.response?.data || error.message 
      })
    };
  }
};
