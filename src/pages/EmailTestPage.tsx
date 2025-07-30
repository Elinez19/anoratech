import EmailTest from '../components/EmailTest';

const EmailTestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Email Testing Dashboard
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use this page to test the Resend email functionality. Make sure you have set up your 
            VITE_RESEND_API_KEY environment variable before testing.
          </p>
        </div>
        
        <EmailTest />
        
        <div className="mt-8 max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Testing Instructions</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>1.</strong> Set up your environment variables in a <code>.env</code> file:</p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_FROM_EMAIL=hello@anoratech.com`}
            </pre>
            
            <p><strong>2.</strong> Get your Resend API key from <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">resend.com</a></p>
            
            <p><strong>3.</strong> Use a real email address for testing to receive the emails</p>
            
            <p><strong>4.</strong> Check your email inbox and spam folder for test emails</p>
            
            <p><strong>5.</strong> Monitor the browser console for any error messages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTestPage; 