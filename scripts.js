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

// You can add interactivity later if needed. For now, this file can be left empty or used for additional features.
let score = 0;
const heart = document.getElementById("heart");
const scoreDisplay = document.getElementById("score");

heart.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

function resetGame() {
  score = 0;
  scoreDisplay.textContent = score;
}
