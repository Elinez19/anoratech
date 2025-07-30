import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface NewsletterSignupEmailProps {
  name?: string;
  email: string;
}

export const NewsletterSignupEmail: React.FC<NewsletterSignupEmailProps> = ({
  name,
}) => {
  const greeting = name ? `Hello ${name},` : 'Hello,';
  
  return (
    <Html>
      <Head />
      <Preview>Welcome to AnoraTech Newsletter!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>AnoraTech</Heading>
            <Text style={tagline}>Innovating Tomorrow, Today</Text>
          </Section>
          
          <Section style={content}>
            <Heading style={h2}>{greeting}</Heading>
            <Text style={paragraph}>
              Thank you for subscribing to our newsletter! We're excited to share the latest insights, 
              tips, and industry trends with you.
            </Text>
            
            <Text style={paragraph}>
              Stay tuned for updates on:
            </Text>
            
            <Section style={featuresList}>
              <Text style={feature}>🚀 Latest technology trends</Text>
              <Text style={feature}>💻 Web development tips</Text>
              <Text style={feature}>🤖 AI and machine learning insights</Text>
              <Text style={feature}>📊 Project case studies</Text>
              <Text style={feature}>🎯 Industry best practices</Text>
            </Section>
            
            <Text style={paragraph}>
              We'll keep you updated with valuable content that helps you stay ahead in the 
              ever-evolving world of technology.
            </Text>
          </Section>
          
          <Section style={ctaSection}>
            <Button style={ctaButton} href="https://anoratech.com">
              Explore Our Portfolio
            </Button>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              You're receiving this email because you subscribed to the AnoraTech newsletter.
            </Text>
            <Link href="#" style={unsubscribeLink}>
              Unsubscribe
            </Link>
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

const header = {
  textAlign: 'center' as const,
  padding: '40px 0',
  backgroundColor: '#1a1a2e',
  borderRadius: '8px 8px 0 0',
};

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
};

const tagline = {
  color: '#64ffda',
  fontSize: '16px',
  margin: '0',
};

const content = {
  padding: '40px 24px',
  backgroundColor: '#ffffff',
};

const h2 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 24px 0',
};

const paragraph = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px 0',
};

const featuresList = {
  margin: '24px 0',
};

const feature = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 8px 0',
};

const ctaSection = {
  textAlign: 'center' as const,
  padding: '32px 24px',
  backgroundColor: '#f6f9fc',
};

const ctaButton = {
  backgroundColor: '#64ffda',
  borderRadius: '6px',
  color: '#1a1a2e',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

const footer = {
  textAlign: 'center' as const,
  padding: '24px',
  backgroundColor: '#f6f9fc',
  borderRadius: '0 0 8px 8px',
};

const footerText = {
  color: '#666',
  fontSize: '14px',
  margin: '0 0 16px 0',
};

const unsubscribeLink = {
  color: '#666',
  fontSize: '14px',
  textDecoration: 'underline',
};

export default NewsletterSignupEmail; 