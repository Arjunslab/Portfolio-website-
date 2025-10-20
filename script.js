// Neon flicker effect on random project items
const projectItems = document.querySelectorAll('#projects li');

setInterval(() => {
  const random = Math.floor(Math.random() * projectItems.length);
  projectItems[random].style.color = '#ff00ff';
  setTimeout(() => {
    projectItems[random].style.color = '#e0e0e0';
  }, 500);
}, 800);

// Smooth scroll for anchor links (if you add nav later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});