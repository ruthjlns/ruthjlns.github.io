// Triggers .visible on elements with .reveal when they enter the viewport
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once only
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => observer.observe(el));