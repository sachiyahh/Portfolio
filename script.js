document.getElementById('year').textContent = new Date().getFullYear();

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const updateActiveLink = () => {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`));
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
