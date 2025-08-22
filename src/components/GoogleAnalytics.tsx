import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
