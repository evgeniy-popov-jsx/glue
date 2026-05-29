const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const button = document.getElementById('button');

function openPopup() {
  popup.classList.add('active');
}

function closePopup() {
  popup.classList.remove('active');
}

popupClose.addEventListener('click', closePopup);
button.addEventListener('click', openPopup);

popup.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup__overlay')) {
    closePopup();
  }
});
