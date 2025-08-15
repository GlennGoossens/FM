import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  formType?: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    const { name, email, subject, message, phone, formType } = data;
    
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Form Type:</strong> ${formType || 'Contact Form'}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This email was sent from the contact form on your website.</small></p>
    `;

    const result = await resend.emails.send({
      from: 'Functional Movementz <website@functionalmovementz.be>',
      to: [process.env.CONTACT_EMAIL || 'info@functionalmovementz.be'],
      subject: `New ${formType || 'Contact'} Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    });
    console.log(result);
    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendBookingEmail(data: EmailData) {
  try {
    const { name, email, message, phone } = data;
    
    const emailContent = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Booking Details:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This email was sent from the booking form on your website.</small></p>
    `;

    const result = await resend.emails.send({
      from: 'Functional Movementz <website@functionalmovementz.be>',
      to: [process.env.CONTACT_EMAIL || 'info@functionalmovementz.be'],
      subject: `New Booking Request from ${name}`,
      html: emailContent,
      replyTo: email,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
