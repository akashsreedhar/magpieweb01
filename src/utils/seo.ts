// SEO utility functions and structured data
export const generateStructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Magpie Web",
    "description": "AI-powered digital solutions company based in Kerala, India",
    "url": "https://magpieweb.com",
    "logo": "https://res.cloudinary.com/duwyf99dl/image/upload/v1745598351/Magpie_Web_Fav_Icon-removebg-preview_nrrxw4.png",
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "name": "Kerala, India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-73069-63417",
      "contactType": "customer service",
      "email": "info@magpieweb.com"
    },
    "sameAs": [
      "https://www.instagram.com/magpie.web"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Powered Solutions",
          "description": "Smart websites, content generation, and AI-driven design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Development",
          "description": "Custom development, AI integration, and cloud solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Optimization",
          "description": "Keyword analysis, content strategy, and performance tracking"
        }
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Magpie Web",
    "url": "https://magpieweb.com",
    "description": "Born in Kerala, built for the world. Magpie Web crafts stunning websites and smart digital solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "Magpie Web"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.magpieweb.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.magpieweb.com/#business",
    "name": "Magpie Web",
    "image": "https://res.cloudinary.com/duwyf99dl/image/upload/v1745598351/Magpie_Web_Fav_Icon-removebg-preview_nrrxw4.png",
    "telephone": "+91-73069-63417",
    "email": "info@magpieweb.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.8505",
      "longitude": "76.2711"
    },
    "url": "https://www.magpieweb.com",
    "sameAs": [
      "https://www.instagram.com/magpie.web"
    ],
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$"
  };

  return {
    organization: organizationSchema,
    website: websiteSchema,
    localBusiness: localBusinessSchema
  };
};

export const injectStructuredData = () => {
  const schemas = generateStructuredData();
  
  // Remove existing structured data scripts safely
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]:not([id="faq-schema"])');
  existingScripts.forEach(script => {
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
  });
  
  // Inject new structured data
  Object.entries(schemas).forEach(([key, schema]) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `schema-${key}`;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};
