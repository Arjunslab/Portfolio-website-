const texts = [
  "I build things that run.",
  "Code. Apps. Hardware.",
  "No tutorials. Real systems.",
  "Break. Fix. Ship."
];

const element = document.getElementById("dynamicText");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // typing
    element.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1200); // pause after full text
    }
  } else {
    // deleting
    element.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 80);
}

typeEffect();
