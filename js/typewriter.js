function initTypewriter() {
  console.log('Initializing Typewriter...');
  const element = document.getElementById('typewriter');
  if (!element) {
    console.error('Typewriter element not found!');
    return;
  }

  const phrases = [
    "Mitochondria is the powerhouse of the cell",
    "Birds are not real",
    "I have spent 12 hours on making this secret page",
    "Biology is cool!",
    "This sentence is a lie"
  ];
  
  let currentPhrase = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let timeoutId;

  function type() {
    const currentText = phrases[currentPhrase].substring(0, charIndex);
    element.textContent = currentText;
    
    if (!isDeleting && charIndex < phrases[currentPhrase].length) {
      charIndex++;
      typingSpeed = 100;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      typingSpeed = 50;
    } else {
      isDeleting = !isDeleting;
      typingSpeed = isDeleting ? 1000 : 500;
      if (!isDeleting) {
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }
    }
    
    timeoutId = setTimeout(type, typingSpeed);
  }

  // Start animation
  type();
  console.log('Typewriter initialized successfully!');
}