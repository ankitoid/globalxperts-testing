import { useEffect } from "react";

const isMobile = () => {
  // Basic check for mobile devices
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const ExternalRedirect = ({ url }) => {
  useEffect(() => {
    if (isMobile()) {
      // On mobile, navigate in the same tab
      window.location.href = url;
    } else {
      // On desktop, open in a new tab and redirect current tab
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Redirect the current tab to home or wherever you want
      window.location.href = "/";
    }
  }, [url]);

  return null;
};

export default ExternalRedirect;
