document.addEventListener('DOMContentLoaded', function() {
  // Maintain language selection across pages
  const langLinks = document.querySelectorAll('.lang-switcher a');
  
  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Store language preference for 1 year
      document.cookie = `lang=${this.dataset.lang};path=/;max-age=${60*60*24*365}`;
      
      // Convert current path to target language
      const currentPath = window.location.pathname;
      let newPath = this.dataset.lang === 'en' 
        ? currentPath.replace('/ru', '') 
        : '/ru' + currentPath.replace('/ru', '');
      
      // Special case for home page
      if (newPath === '/ru/') newPath = '/ru';
      if (newPath === '//') newPath = '/';
      
      // Update URL without full reload if possible
      if (window.history.pushState) {
        window.history.pushState({}, '', newPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      } else {
        window.location.href = newPath;
      }
    });
  });
});