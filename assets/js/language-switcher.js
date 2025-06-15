document.addEventListener('DOMContentLoaded', function() {
  const langLinks = document.querySelectorAll('.lang-switcher a');
  
  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.classList.contains('active')) {
        e.preventDefault();
        return;
      }
      
      // Set cookie for language preference
      document.cookie = `lang=${this.dataset.lang};path=/;max-age=31536000`;
      
      // Force full page reload for homepage transitions
      if (window.location.pathname === '/' || window.location.pathname === '/ru/') {
        window.location.href = this.href;
      }
    });
  });
});