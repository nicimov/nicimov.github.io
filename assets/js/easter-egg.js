document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('suspiciousButton');
  let pressCount = 0;
  
  if (button) {
    button.addEventListener('click', function() {
      pressCount++;
      
      // Special messages at certain counts
      if (pressCount === 10) {
        this.innerHTML = 'Suspicious-looking button <small>why are you still clicking this?</small>';
      }
      else if (pressCount === 15) {
        this.innerHTML = 'Suspicious-looking button <small>last warning...</small>';
      }
      else if (pressCount === 19) {
        this.innerHTML = 'Suspicious-looking button <small>one more click...</small>';
      }
      // Redirect after 20 presses
      else if (pressCount >= 20) {
        window.location.href = "/verysecretpage";
      }
    });
  }
});