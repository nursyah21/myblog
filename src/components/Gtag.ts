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

  const script2 = document.createElement('script');

  // Set the content of the script element
  script2.textContent = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GEN0REHG60');
  `;

  // Append the script element to the head of the document
  document.head.appendChild(script2);
}

// Load Google Analytics
// loadGoogleAnalytics();