window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});
// show hide question

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.faq-icon i');
    if (icon.className === 'fa-solid fa-chevron-right') {
      icon.className = 'fa-solid fa-chevron-down';
    } else {
      icon.className = 'fa-solid fa-chevron-right';
    }
  });
});

// nav menu show/hide

const menu = document.querySelector('.nav-menu');
const menuOpen = document.querySelector('#open-menu');
const menuClose = document.querySelector('#close-menu');

menuOpen.addEventListener('click', () => {
  menu.style.display = 'flex';
  menuOpen.style.display = 'none';
  menuClose.style.display = 'inline-block';
});

const closeNav = () => {
  menu.style.display = 'none';
  menuOpen.style.display = 'inline-block';
  menuClose.style.display = 'none';
};

menuClose.addEventListener('click', closeNav);
