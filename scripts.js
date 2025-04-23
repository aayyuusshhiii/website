function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
});
heart.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  // Move heart to a random position
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.6;
  heart.style.position = 'absolute';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
});
lay.textContent = score;
}
const fruitArea = document.getElementById("fruitArea");
const fruitScore = document.getElementById("fruitScore");
let score = 0;

function createFruit() {
  const fruit = document.createElement("img");
  fruit.src = "https://i.imgur.com/Kz5TQWf.png"; // Example fruit (watermelon)
  fruit.className = "fruit";

  fruit.style.left = Math.random() * (fruitArea.offsetWidth - 50) + "px";
  fruit.style.top = "-50px";

  fruitArea.appendChild(fruit);

  // Animate falling
  let position = 0;
  const fallInterval = setInterval(() => {
    position += 3;
    fruit.style.top = position + "px";
    if (position > 400) {
      clearInterval(fallInterval);
      fruit.remove();
    }
  }, 20);

  fruit.addEventListener("click", () => {
    score++;
    fruitScore.textContent = score;
    clearInterval(fallInterval);
    fruit.remove();
  });
}

// Drop fruits every 1 second
setInterval(createFruit, 1000);

