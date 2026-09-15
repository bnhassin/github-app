/**
 * Vercel Speed Insights Integration
 * 
 * This script initializes Vercel Speed Insights for the Mintlify documentation site.
 * Speed Insights automatically collects Core Web Vitals metrics including:
 * - Largest Contentful Paint (LCP)
 * - First Input Delay (FID)
 * - Cumulative Layout Shift (CLS)
 * - Time to First Byte (TTFB)
 * - Interaction to Next Paint (INP)
 * 
 * @see https://vercel.com/docs/speed-insights/quickstart
 */

// Initialize Speed Insights queue
window.si = window.si || function () { 
  (window.siq = window.siq || []).push(arguments); 
};

// Load the Speed Insights script
(function() {
  var script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  document.head.appendChild(script);
})();
