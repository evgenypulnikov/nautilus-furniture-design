// Slider Vars

const dotsBlock = document.querySelector('.photo-grid__dots');
const dots = document.querySelectorAll('.photo-grid__dot');
const slides = document.querySelectorAll('.photo-grid__slide');
let slideIndex = 1;

// Full View Vars

const photoGridItem = document.querySelectorAll('.photo-grid__photo');
const fullViewPopup = document.querySelector('.popup_full-view');
const fullViewContainer = document.querySelector('.popup__container');
const fullViewImg = fullViewPopup.querySelector('.popup__photo');

// Slider



// Open & Close Popup

function openPopup(popup) {
  popup.classList.add('popup_is_opened');
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
