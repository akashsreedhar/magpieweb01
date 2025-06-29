// Performance monitoring utilities
export const measureWebVitals = () => {
  // Core Web Vitals measurement
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
        // Track LCP in analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vital', {
            name: 'LCP',
            value: Math.round(entry.startTime),
            event_category: 'performance',
          });
        }
      }
      
      if (entry.entryType === 'first-input') {
        const fidEntry = entry as any;
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        // Track FID in analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vital', {
            name: 'FID',
            value: Math.round(fidEntry.processingStart - fidEntry.startTime),
            event_category: 'performance',
          });
        }
      }
    }
  });

  // Observe performance entries
  try {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
  } catch (e) {
    console.warn('Performance Observer not supported');
  }

  // Measure Cumulative Layout Shift (CLS)
  let clsValue = 0;
  let clsEntries: PerformanceEntry[] = [];

  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
        clsEntries.push(entry);
      }
    }
  });

  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    console.warn('Layout Shift Observer not supported');
  }

  // Report CLS when page visibility changes
  const reportCLS = () => {
    console.log('CLS:', clsValue);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vital', {
        name: 'CLS',
        value: Math.round(clsValue * 1000),
        event_category: 'performance',
      });
    }
  };

  // Report when page becomes hidden
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      reportCLS();
    }
  });

  // Report on page unload
  window.addEventListener('beforeunload', reportCLS);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    'https://res.cloudinary.com/duwyf99dl/image/upload/v1745598351/Magpie_Web_Fav_Icon-removebg-preview_nrrxw4.png'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = 'image';
    document.head.appendChild(link);
  });
};
