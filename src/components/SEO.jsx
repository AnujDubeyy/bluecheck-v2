import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update the browser tab title
    document.title = title ? `${title} | Cybrion Consulting` : 'Cybrion Consulting | Regulatory & Commercial Consulting Services';

    // Update the meta description tag dynamically
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
    if (description) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEO;
