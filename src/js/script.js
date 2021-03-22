document.addEventListener('DOMContentLoaded', () => {
   // Nav
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

   // Slider
   function initSlider(sliderClass) {
      const slider = document.querySelector(`${sliderClass}`),
         sliderTrack = slider.querySelector('.slider__track'),
         sliderItems = slider.querySelectorAll('.slider__item'),
         sliderNext = slider.querySelector('.slider__arrow_next'),
         sliderPrev = slider.querySelector('.slider__arrow_prev'),
         sliderCounter = slider.querySelector('.slider__counter');

      // Счётчик текущего слайда
      let slideCurrent = 1;

      // Ширина дорожки со слайдами
      sliderTrack.style.width = `${(100 * sliderItems.length)}%`;

      // Ширина слайда в дорожке
      const slideWidth = 100 / sliderItems.length;
      sliderItems.forEach(item => {
         item.style.width = `${slideWidth}%`;
      });

      // Смещение слайда
      sliderTrack.style.transform = `translateX(-${(slideCurrent - 1) * slideWidth}%)`;

      // Инициализация количества слайдов в слайдере в счётчике
      sliderCounter.textContent = `${slideCurrent}/${sliderItems.length}`;

      function changeSlide(dir) {
         if (dir == 'r') {
            slideCurrent += 1;
         } else if (dir == 'l') {
            slideCurrent -= 1;
         }

         if (slideCurrent === 0) {
            slideCurrent = sliderItems.length;
         } else if (slideCurrent === sliderItems.length + 1) {
            slideCurrent = 1;
         }

         const offset = (slideCurrent - 1) * slideWidth;
         sliderTrack.style.transform = `translateX(-${offset}%)`;

         sliderCounter.textContent = `${slideCurrent}/${sliderItems.length}`;
      }

      sliderNext.addEventListener('click', () => {
         changeSlide('r');
      });

      sliderPrev.addEventListener('click', () => {
         changeSlide('l');
      });
   }

   // IBG 
   function ibg() {
      let ibg = document.querySelectorAll(".ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }

   // Mainscreen Slider
   initSlider('.mainscreen__slider');

   // Best Slider
   initSlider('.best__slider');

   // IBG
   ibg();
});