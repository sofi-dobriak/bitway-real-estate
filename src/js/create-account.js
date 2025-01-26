const refs = {
  createForm: document.querySelector('.js-create-form'),
  createButton: document.querySelector('.js-create-button'),
  modalWindowBackDrop: document.querySelector('.modal-backdrop'),
};

refs.createForm.addEventListener('submit', e => {
  e.preventDefault();

  const userName = e.target.elements['user-name'].value.trim();
  const userLastName = e.target.elements['user-surname'].value.trim();
  const userEmail = e.target.elements['user-email'].value.trim();
  const userPassword = e.target.elements['user-password'].value.trim();

  if (
    userName !== '' ||
    userLastName !== '' ||
    userEmail !== '' ||
    userPassword !== ''
  ) {
    openModalWindow();
  }
});

function openModalWindow() {
  refs.modalWindowBackDrop.classList.toggle('is-open');
}

refs.modalWindowBackDrop.addEventListener('click', () => {
  refs.modalWindowBackDrop.remove('is-open');
});
