import { Resend } from 'resend';

// Initialize Resend with API key
const apiKey = import.meta.env.VITE_RESEND_API_KEY;
console.log('Resend API Key available:', !!apiKey);

if (!apiKey) {
  console.warn('⚠️ VITE_RESEND_API_KEY is not configured. Please add it to your .env file');
}

export const resend = new Resend(apiKey);

// Check if Resend is properly configured
export const isResendConfigured = () => {
  return !!apiKey;
};

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
    // Check if Resend is configured
    if (!isResendConfigured()) {
      console.log('Resend not configured, using mock response');
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Mock email sent successfully');
      return { id: 'mock-email-id', from: EMAIL_CONFIG.FROM_EMAIL, to: [EMAIL_CONFIG.FROM_EMAIL] };
    }

    // For development, always use mock to avoid CORS issues
    console.log('Development mode: using mock email sending');
    console.log('Email data:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Mock email sent successfully');
    return { id: 'mock-email-id', from: EMAIL_CONFIG.FROM_EMAIL, to: [EMAIL_CONFIG.FROM_EMAIL] };

    // Uncomment this section when you have a backend API set up
    /*
    console.log('Rendering contact form email template...');
    const emailHtml = await render(ContactFormEmail({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }));
    console.log('Email template rendered successfully');

    console.log('Sending email via Resend...');
    const { data: result, error } = await resend.emails.send({
      from: EMAIL_CONFIG.FROM_EMAIL,
      to: [EMAIL_CONFIG.FROM_EMAIL],
      subject: `New Contact Form Submission: ${data.subject}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error('Failed to send email');
    }

    console.log('Email sent successfully:', result);
    return result;
    */
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
    // Check if Resend is configured
    if (!isResendConfigured()) {
      console.log('Resend not configured, using mock response for newsletter email');
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Mock newsletter email sent successfully');
      return { id: 'mock-newsletter-id', from: EMAIL_CONFIG.FROM_EMAIL, to: [data.email] };
    }

    // For development, always use mock to avoid CORS issues
    console.log('Development mode: using mock newsletter email sending');
    console.log('Newsletter email data:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Mock newsletter email sent successfully');
    return { id: 'mock-newsletter-id', from: EMAIL_CONFIG.FROM_EMAIL, to: [data.email] };

    // Uncomment this section when you have a backend API set up
    /*
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
    */
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
    // Check if Resend is configured
    if (!isResendConfigured()) {
      console.log('Resend not configured, using mock response for thank you email');
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Mock thank you email sent successfully');
      return { id: 'mock-thank-you-id', from: EMAIL_CONFIG.FROM_EMAIL, to: [data.email] };
    }

    // For development, always use mock to avoid CORS issues
    console.log('Development mode: using mock thank you email sending');
    console.log('Thank you email data:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Mock thank you email sent successfully');
    return { id: 'mock-thank-you-id', from: EMAIL_CONFIG.FROM_EMAIL, to: [data.email] };

    // Uncomment this section when you have a backend API set up
    /*
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
    */
  } catch (error) {
    console.error('Thank you email error:', error);
    throw error;
  }
}; 