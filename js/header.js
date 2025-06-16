function setTheme(theme) {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);