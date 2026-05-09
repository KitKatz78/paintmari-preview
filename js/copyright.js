/**
 * Automatically update copyright year to current year
 * Usage: Add data-copyright-year="2006" to your copyright element
 * Example: <div class="copyright" data-copyright-year="2006">&copy; <span id="copyright-year"></span> Paintmari.com. All Rights Reserved.</div>
 */

(function() {
  'use strict';
  
  function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('[data-copyright-year]');
    
    copyrightElements.forEach(function(element) {
      const startYear = element.getAttribute('data-copyright-year');
      const yearSpan = element.querySelector('#copyright-year');
      
      if (yearSpan) {
        // Always show the range format for consistency
        if (startYear && startYear !== String(currentYear)) {
          yearSpan.textContent = startYear + '-' + currentYear;
        } else {
          yearSpan.textContent = currentYear;
        }
      }
    });
  }
  
  // Update on page load and after slight delay to catch dynamic content
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCopyrightYear);
  } else {
    updateCopyrightYear();
  }
  
  // Also update when page becomes visible (tab switch, etc)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      setTimeout(updateCopyrightYear, 100);
    }
  });
})();
