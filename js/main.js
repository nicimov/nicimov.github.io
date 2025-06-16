document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded, initializing effects...');
  
  // Initialize Matrix Rain
  if (document.getElementById('matrixCanvas')) {
    initMatrixRain();
  }
  
  // Initialize Typewriter
  if (document.getElementById('typewriter')) {
    initTypewriter();
  }
  
  console.log('All effects initialized!');
});