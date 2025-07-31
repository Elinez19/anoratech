import { useEffect } from 'react';

interface CrispChatProps {
  websiteId: string;
  tokenId?: string;
  sessionMerge?: boolean;
}

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
    CRISP_TOKEN_ID?: string;
  }
}

const CrispChat: React.FC<CrispChatProps> = ({ 
  websiteId, 
  tokenId, 
  sessionMerge = false 
}) => {
  useEffect(() => {
    // Don't load if websiteId is not set properly
    if (!websiteId || websiteId === 'YOUR_CRISP_WEBSITE_ID') {
      console.warn('Crisp Chat: Website ID not configured. Please set VITE_CRISP_WEBSITE_ID in your environment variables.');
      return;
    }

    // Initialize Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = websiteId;
    
    if (tokenId) {
      window.CRISP_TOKEN_ID = tokenId;
    }

    // Configure chat settings
    window.$crisp.push(['safe', true]);
    
    // Set session merge if needed
    if (sessionMerge) {
      window.$crisp.push(['set', 'session:merge', sessionMerge]);
    }

    // Set custom configuration
    window.$crisp.push(['set', 'chat:color', '#10B981']); // Using your mint color
    window.$crisp.push(['set', 'chat:theme', 'default']);
    
    // Load the Crisp script
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    script.defer = true;
    
    // Add script to document head
    document.head.appendChild(script);

    // Set user data if available (you can customize this)
    window.$crisp.push(['set', 'user:company', 'AnoraTech Website Visitor']);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      const existingScript = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Clean up Crisp elements
      const crispContainer = document.getElementById('crisp-chatbox');
      if (crispContainer) {
        crispContainer.remove();
      }
      
      // Clear global variables
      if (window.$crisp) {
        delete window.$crisp;
      }
      if (window.CRISP_WEBSITE_ID) {
        delete window.CRISP_WEBSITE_ID;
      }
      if (window.CRISP_TOKEN_ID) {
        delete window.CRISP_TOKEN_ID;
      }
    };
  }, [websiteId, tokenId, sessionMerge]);

  return null; // This component doesn't render anything visible
};

export default CrispChat;