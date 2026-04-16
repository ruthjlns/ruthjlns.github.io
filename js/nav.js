// Adds a .scrolled class to the nav when the user scrolls past the hero
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Dropdown menu functionality
const dropdownLink = document.querySelector('.nav__link-dropdown');
const dropdown = document.querySelector('.nav__dropdown');

if (dropdownLink && dropdown) {
  dropdownLink.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
  });

  // Close dropdown when clicking on a dropdown link
  const dropdownLinks = dropdown.querySelectorAll('.nav__dropdown-link');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__item-dropdown')) {
      dropdown.classList.remove('active');
    }
  });
}