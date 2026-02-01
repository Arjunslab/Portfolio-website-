const texts = [
  "I build things that run.",
  "Code. Apps. Hardware.",
  "No tutorials. Real systems.",
  "Break. Fix. Ship."
];

const dynamicText = document.getElementById("dynamicText");
let index = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const sectionHeight = window.innerHeight;

  const newIndex = Math.floor(scrollY / sectionHeight);
  if (texts[newIndex] && newIndex !== index) {
    index = newIndex;
    dynamicText.style.opacity = 0;
    setTimeout(() => {
      dynamicText.textContent = texts[index];
      dynamicText.style.opacity = 1;
    }, 200);
  }

  // Tinder-style stack depth
  document.querySelectorAll(".card").forEach((card, i) => {
    const offset = scrollY / 600;
    card.style.transform = `translateY(${i * 40 - offset * 20}px) scale(${1 - i * 0.04})`;
    card.style.opacity = 1 - i * 0.15;
  });
});
