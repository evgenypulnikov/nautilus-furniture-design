const popupsContainers = document.querySelectorAll('.popup__container');

// Full View Vars

const photoGridItem = document.querySelectorAll('.photo-grid__photo');
const fullViewPopup = document.querySelector('.popup_full-view');
const fullViewContainer = document.querySelector('.popup__container');
const fullViewImg = fullViewPopup.querySelector('.popup__photo');

// Slider Vars

const dots = document.querySelectorAll('.photo-grid__dot');
const dotsWrapper = document.querySelector('.photo-grid__dots');
const slides = document.querySelectorAll('.photo-grid__slide');
const prevBtn = document.querySelector('.photo-grid__button_to_prev');
const nextBtn = document.querySelector('.photo-grid__button_to_next');
let slideIndex = 1;

// Mobile Nav Vars

const menuBtn = document.querySelector('.header__menu-button');
const mobileMenu = document.querySelector('.header__nav');

// Mobile Nav

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('header__menu-button_is_active');
  mobileMenu.classList.toggle('header__nav_mobile_active');
});

// Slider

showSlides(slideIndex);

function showSlides(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('photo-grid__slide_is_active');
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('photo-grid__dot_is_active');
  }
  slides[slideIndex - 1].classList.add('photo-grid__slide_is_active');
  dots[slideIndex - 1].classList.add('photo-grid__dot_is_active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

prevBtn.addEventListener('click', function() {
  plusSlides(-1);
});

nextBtn.addEventListener('click', function() {
  plusSlides(1);
});

dotsWrapper.addEventListener('click', function(evt) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (evt.target.classList.contains('photo-grid__dot') && evt.target == dots[i - 1]) {
      currentSlide(i);
    }
  }
});

// Open & Close Popup

function openPopup(popup) {
  popup.classList.add('popup_is_opened');

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape' && popup.classList.contains('popup_is_opened')) {
      popup.classList.remove('popup_is_opened');
    }
  });

  popup.addEventListener('click', function() {
    if (popup.classList.contains('popup_is_opened')) {
      popup.classList.remove('popup_is_opened');
    }
  });
}

function closePopup(popup) {
  popup.classList.remove('popup_is_opened');
}

photoGridItem.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    fullViewImg.src = evt.target.src;
    fullViewImg.alt = evt.target.alt;
    openPopup(fullViewPopup);
  });
});

// Close Button

const closeButton = document.querySelectorAll('.popup__close');
  closeButton.forEach(function(btn) {
    btn.addEventListener('click', function(evt) {
      closePopup(evt.target.closest('.popup'));
    });
});

// Smooth Scroll To Anchors

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(evt) {
    evt.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Exlude Content From Overlay

popupsContainers.forEach(function(elem) {
  elem.addEventListener('click', function(evt) {
    evt.stopPropagation();
  });
});
