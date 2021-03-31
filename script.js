const burger = document.querySelector('.nav-button');
const navMenu = document.querySelector('nav');

burger.addEventListener('click', changeMenu);

function toggleClass(elem, clss) {
  elem.classList.toggle(clss);
}

function changeMenu() {
  toggleClass(burger, 'cross');
  toggleClass(navMenu, 'active');
}