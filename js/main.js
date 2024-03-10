const toggleBtn = document.querySelector('#toggleBtn'),
  header = document.querySelector('#header'),
  faqBox = document.querySelectorAll('.faq-box');

toggleBtn.addEventListener('click', () => {
  header.classList.toggle('active');
})


const TrandingSlider = new Swiper('.testimonial__slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

faqBox.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
  });
});