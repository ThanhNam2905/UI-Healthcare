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
