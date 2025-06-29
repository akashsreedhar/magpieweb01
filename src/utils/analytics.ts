// Analytics utility for tracking user interactions
export const initializeAnalytics = () => {
  // Google Analytics 4 setup - Get from environment variable or fallback
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
  
  // Don't initialize in development or if no valid ID
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX' || import.meta.env.DEV) {
    console.log('Analytics not initialized (development mode or missing ID)');
    return;
  }
  
  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_title: document.title,
      page_location: window.location.href,
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  `;
  document.head.appendChild(script2);
  
  console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, section?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    section: section,
  });
};

// Track page views for SPA
export const trackPageView = (pagePath: string, pageTitle: string) => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
  
  if (typeof window !== 'undefined' && (window as any).gtag && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};
