import { Resend } from 'resend';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Preflight request handler
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, user_email, company, subject, message } = req.body;

  console.log(`Received contact form submission from: ${name} (${user_email})`);

  // Validation
  if (!name || !user_email || !company || !subject || !message) {
    console.warn('Validation failed: missing fields.');
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user_email)) {
    console.warn('Validation failed: invalid email format.');
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    // Initialize Resend Client
    const apiKey = process.env.RESEND_API_KEY || process.env.SMTP_PASS;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined.');
      return res.status(500).json({ error: 'Mail service configuration error.' });
    }
    const resend = new Resend(apiKey);

    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const TO_EMAIL = process.env.TO_EMAIL || 'cybrion.consulting@gmail.com';

    // Send Notification Email to Cybrion Consulting
    const { data, error } = await resend.emails.send({
      from: `"${name}" <${SENDER_EMAIL}>`,
      replyTo: user_email,
      to: TO_EMAIL,
      subject: `New Contact Submission: ${subject}`,
      html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ error: error.message });
    }

    console.log(`Email notification sent successfully to ${TO_EMAIL}:`, data);
    return res.status(200).json({ success: true, message: 'Message sent successfully.' });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
}
