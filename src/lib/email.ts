import { Resend } from 'resend';
import { render } from '@react-email/components';
import ContactFormEmail from '../components/emails/ContactFormEmail';
import NewsletterSignupEmail from '../components/emails/NewsletterSignupEmail';

// Initialize Resend with API key
export const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY );

// Email templates
export const EMAIL_TEMPLATES = {
  CONTACT_FORM: 'contact-form',
  NEWSLETTER_SIGNUP: 'newsletter-signup',
  PROJECT_INQUIRY: 'project-inquiry',
  THANK_YOU: 'thank-you',
} as const;

// Email configuration
export const EMAIL_CONFIG = {
  FROM_EMAIL: 'hello@anoratech.com',
  FROM_NAME: 'AnoraTech Team',
  REPLY_TO: 'hello@anoratech.com',
} as const;

// Email sending functions
export const sendContactFormEmail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const emailHtml = await render(ContactFormEmail({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }));

    const { data: result, error } = await resend.emails.send({
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: [EMAIL_CONFIG.FROM_EMAIL],
      subject: `New Contact Form Submission: ${data.subject}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }

    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

export const sendNewsletterSignupEmail = async (data: {
  email: string;
  name?: string;
}) => {
  try {
    const emailHtml = await render(NewsletterSignupEmail({
      name: data.name,
      email: data.email,
    }));

    const { data: result, error } = await resend.emails.send({
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: [data.email],
      subject: 'Welcome to AnoraTech Newsletter!',
      html: emailHtml,
    });

    if (error) {
      console.error('Error sending newsletter email:', error);
      throw new Error('Failed to send newsletter email');
    }

    return result;
  } catch (error) {
    console.error('Newsletter email error:', error);
    throw error;
  }
};

export const sendThankYouEmail = async (data: {
  email: string;
  name: string;
  type: 'contact' | 'newsletter' | 'project';
}) => {
  try {
    const subject = data.type === 'contact' 
      ? 'Thank you for contacting AnoraTech'
      : data.type === 'newsletter'
      ? 'Welcome to AnoraTech Newsletter'
      : 'Thank you for your project inquiry';

    const { data: result, error } = await resend.emails.send({
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: [data.email],
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Thank you, ${data.name}!</h2>
          <p style="color: #666; line-height: 1.6;">
            We've received your ${data.type === 'contact' ? 'message' : data.type === 'newsletter' ? 'newsletter subscription' : 'project inquiry'} and will get back to you soon.
          </p>
          <p style="color: #666; line-height: 1.6;">
            In the meantime, feel free to explore our portfolio and blog for more insights.
          </p>
          <p style="color: #666; line-height: 1.6;">
            Best regards,<br>The AnoraTech Team
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending thank you email:', error);
      throw new Error('Failed to send thank you email');
    }

    return result;
  } catch (error) {
    console.error('Thank you email error:', error);
    throw error;
  }
}; 