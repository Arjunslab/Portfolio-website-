const texts = [
  "I build things that run.",
  "Code. Apps. Hardware.",
  "No tutorials. Real systems.",
  "Break. Fix. Ship."
];

const dynamicText = document.getElementById("dynamicText");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroTop = hero.offsetTop;
  const heroHeight = hero.offsetHeight;
  const scrollY = window.scrollY;

  // Only change text while hero is in view
  if (scrollY >= heroTop && scrollY <= heroTop + heroHeight) {
    const progress = (scrollY - heroTop) / heroHeight;
    const index = Math.min(
      texts.length - 1,
      Math.floor(progress * texts.length)
    );

    dynamicText.textContent = texts[index];
  }

  // Tinder-style card stack
  document.querySelectorAll(".card").forEach((card, i) => {
    const offset = scrollY / 600;
    card.style.transform = `translateY(${i * 40 - offset * 20}px) scale(${1 - i * 0.04})`;
    card.style.opacity = 1 - i * 0.15;
  });
});
