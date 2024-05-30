const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const closeLeftIcon = 'ri-arrow-left-s-line';
const closeRightIcon = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.remove(navClosedClass);
    mobileNav.classList.add(navOpenedClass);
    mobileNav.classList.add('shadow-xl');
    closeBtnIcon.classList.remove(closeRightIcon);
    closeBtnIcon.classList.add(closeLeftIcon);
  } else if (mobileNav.classList.contains(navOpenedClass)) {
    mobileNav.classList.remove(navOpenedClass);
    mobileNav.classList.add(navClosedClass);
    mobileNav.classList.remove('shadow-xl');
    closeBtnIcon.classList.remove(closeLeftIcon);
    closeBtnIcon.classList.add(closeRightIcon);
  }
});

// swiper js
const testimionalsSwiper = new Swiper('.testimionals__swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const teamsSwiper = new Swiper('.teams__swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Faq
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  const faqBtn = item.querySelector('.faq__btn');

  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconColor = isOpen ? 'text-secondary' : 'text-accent-default';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} ${iconColor} text-2xl`;
  });
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400,
  reset: true, //resets animations
});

// hero section
sr.reveal('.hero__text', { origin: 'top' });
sr.reveal('.hero__img', { origin: 'right' });

// stars section
sr.reveal('.stats__item', {
  delay: 400,
  origin: 'top',
  distance: '100px',
  interval: 100,
});

// services section
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {
  delay: 400,
  interval: 100,
  distance: '100px',
  origin: 'bottom',
});

// Appointment section
sr.reveal('.appointment__title', { origin: 'left' });
sr.reveal('.appointment__form', { origin: 'right' });

// Testimionals section
sr.reveal('.testimionals__container', {
  delay: 400,
  interval: 100,
  distance: '100px',
  origin: 'bottom',
});

// Teams section
sr.reveal('.teams__title', { origin: 'left' });
sr.reveal('.teams__swiper', { origin: 'right' });

// Faq section
sr.reveal('.faq__title', { origin: 'top' });
sr.reveal('.faq__item', { origin: 'bottom' });

// Departments section
sr.reveal('.departments__bg');

// Blog section
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
  delay: 400,
  interval: 100,
  distance: '100px',
  origin: 'bottom',
});

// Brand section
sr.reveal('.brand__title', {
  origin: 'left',
});

sr.reveal('.brand__logo', {
  origin: 'right',
});

// Newsletter section
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

// Footer
sr.reveal('.footer__item', {
  delay: 400,
  interval: 100,
  distance: '100px',
  origin: 'bottom',
});
