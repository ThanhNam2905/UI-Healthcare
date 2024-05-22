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
