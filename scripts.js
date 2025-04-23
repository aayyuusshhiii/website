// Smooth scroll to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Contact form handler
document.getElementById('contact-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
});

// ❤️ Heart click game (with moving heart)
const heart = document.getElementById('heart');
const scoreDisplay = document.getElementById('score');
let score = 0;

if (heart) {
  heart.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;

    // Move heart randomly
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.6;
    heart.style.position = 'absolute';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  });
}

// 🍉 Cut the Fruit Game
const fruitArea = document.getElementById("fruitArea");
const fruitScore = document.getElementById("fruitScore");
let fruitGameScore = 0;

function createFruit() {
  const fruit = document.createElement("img");
  fruit.src = "https://i.imgur.com/Kz5TQWf.png"; // Change to any fruit image
  fruit.className = "fruit";

  fruit.style.left = Math.random() * (fruitArea.offsetWidth - 50) + "px";
  fruit.style.top = "-50px";

  fruitArea.appendChild(fruit);

  let position = 0;
  const fallInterval = setInterval(() => {
    position += 3;
    fruit.style.top = position + "px";
    if (position > fruitArea.offsetHeight) {
      clearInterval(fallInterval);
      fruit.remove();
    }
  }, 20);

  fruit.addEventListener("click", () => {
    fruitGameScore++;
    fruitScore.textContent = fruitGameScore;
    clearInterval(fallInterval);
    fruit.remove();
  });
}

// Start dropping fruits
if (fruitArea) {
  setInterval(createFruit, 1000);
}
