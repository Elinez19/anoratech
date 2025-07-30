import { useState } from 'react';
import { sendContactFormEmail, sendNewsletterSignupEmail, sendThankYouEmail } from '../lib/email';
import { useToast } from './ui/ToastContext';

const EmailTest: React.FC = () => {
  const { showToast } = useToast();
  const [testEmail, setTestEmail] = useState('');
  const [testName, setTestName] = useState('');
  const [testMessage, setTestMessage] = useState('');
  const [status, setStatus] = useState<string>('');

  const testContactForm = async () => {
    setStatus('Testing contact form...');
    try {
      await sendContactFormEmail({
        name: testName,
        email: testEmail,
        subject: 'Test Contact Form',
        message: testMessage,
      });
      setStatus('✅ Contact form email sent successfully!');
      showToast({
        type: 'success',
        title: 'Contact Form Test Successful',
        message: 'Email sent successfully!',
        duration: 3000
      });
    } catch (error) {
      setStatus(`❌ Contact form error: ${error}`);
      showToast({
        type: 'error',
        title: 'Contact Form Test Failed',
        message: `Error: ${error}`,
        duration: 5000
      });
    }
  };

  const testNewsletterSignup = async () => {
    setStatus('Testing newsletter signup...');
    try {
      await sendNewsletterSignupEmail({
        email: testEmail,
        name: testName,
      });
      setStatus('✅ Newsletter signup email sent successfully!');
      showToast({
        type: 'success',
        title: 'Newsletter Test Successful',
        message: 'Newsletter signup email sent successfully!',
        duration: 3000
      });
    } catch (error) {
      setStatus(`❌ Newsletter signup error: ${error}`);
      showToast({
        type: 'error',
        title: 'Newsletter Test Failed',
        message: `Error: ${error}`,
        duration: 5000
      });
    }
  };

  const testThankYouEmail = async () => {
    setStatus('Testing thank you email...');
    try {
      await sendThankYouEmail({
        email: testEmail,
        name: testName,
        type: 'contact',
      });
      setStatus('✅ Thank you email sent successfully!');
      showToast({
        type: 'success',
        title: 'Thank You Email Test Successful',
        message: 'Thank you email sent successfully!',
        duration: 3000
      });
    } catch (error) {
      setStatus(`❌ Thank you email error: ${error}`);
      showToast({
        type: 'error',
        title: 'Thank You Email Test Failed',
        message: `Error: ${error}`,
        duration: 5000
      });
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Email Test Component</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Test Email:</label>
          <input
            type="email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="test@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Test Name:</label>
          <input
            type="text"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Test User"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Test Message:</label>
          <textarea
            value={testMessage}
            onChange={(e) => setTestMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows={3}
            placeholder="This is a test message..."
          />
        </div>

        <div className="space-y-2">
          <button
            onClick={testContactForm}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Test Contact Form Email
          </button>

          <button
            onClick={testNewsletterSignup}
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Test Newsletter Signup Email
          </button>

          <button
            onClick={testThankYouEmail}
            className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Test Thank You Email
          </button>
        </div>

        {status && (
          <div className="mt-4 p-3 bg-gray-100 rounded">
            <p className="text-sm">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailTest; 