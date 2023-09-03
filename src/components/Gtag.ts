// Replace 'GA_MEASUREMENT_ID' with your actual Measurement ID
const GA_MEASUREMENT_ID = 'UA-XXXXXXXXX-X';

// Create a function to load Google Analytics
export default function loadGoogleAnalytics(GA_MEASUREMENT_ID: string) {
  // Create the gtag script element
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;

  // Append the script to the document's head
  document.head.appendChild(script);

  // Initialize Google Analytics with your Measurement ID
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...arg: any[]) {
      window.dataLayer.push(arg);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }
}

// Load Google Analytics
// loadGoogleAnalytics();