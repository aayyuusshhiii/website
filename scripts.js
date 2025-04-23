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
