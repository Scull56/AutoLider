document.addEventListener('DOMContentLoaded', () => {
   const navBurger = document.querySelector('.nav__burger'),
      navPages = document.querySelector('.nav__pages'),
      overflowBlock = document.querySelector('.overflow-block'),
      navClose = document.querySelector('.nav__close');

   navBurger.addEventListener('click', () => {
      navPages.classList.add('nav__pages_active');
      overflowBlock.style.visibility = 'visible';
   });

   overflowBlock.addEventListener('click', () => {
      navPages.classList.remove('nav__pages_active');
      overflowBlock.style.visibility = 'hidden';
   });

   navClose.addEventListener('click', () => {
      navPages.classList.remove('nav__pages_active');
      overflowBlock.style.visibility = 'hidden';
   });
});