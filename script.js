// Simple animation for cards
const cards = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
        card.style.opacity = 1;
    }
  });
});

// Contact form
document.getElementById("sendForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
});
