import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          
          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={label}>Subject:</Text>
            <Text style={value}>{subject}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from the AnoraTech contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const section = {
  padding: '24px',
  backgroundColor: '#f6f9fc',
  borderRadius: '8px',
  marginBottom: '16px',
};

const label = {
  color: '#333',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
};

const value = {
  color: '#333',
  fontSize: '16px',
  margin: '0',
  lineHeight: '24px',
};

const messageText = {
  color: '#333',
  fontSize: '16px',
  margin: '0',
  lineHeight: '24px',
  whiteSpace: 'pre-wrap',
};

const footer = {
  marginTop: '32px',
  padding: '24px',
  backgroundColor: '#f6f9fc',
  borderRadius: '8px',
};

const footerText = {
  color: '#666',
  fontSize: '12px',
  margin: '0',
  textAlign: 'center' as const,
};

export default ContactFormEmail; 