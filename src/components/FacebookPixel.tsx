import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

const FacebookPixel: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // This effect runs once to initialize the Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      if (!PIXEL_ID) {
        console.warn('VITE_FACEBOOK_PIXEL_ID is not set in your .env file.');
        return;
      }
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView'); // Initial PageView
    }
  }, []);

  useEffect(() => {
    // This effect runs on every route change to track subsequent PageViews
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null; // This component does not render anything
};

export default FacebookPixel;