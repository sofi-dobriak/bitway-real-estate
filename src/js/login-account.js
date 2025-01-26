const refs = {
  loginForm: document.querySelector('.js-login-form'),
  loginButton: document.querySelector('.js-login-button'),
  modalWindowBackDrop: document.querySelector('.modal-backdrop'),
};

refs.loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.target.elements['user-email'].value.trim();
  const password = e.target.elements['user-password'].value.trim();

  if (email !== '' || password !== '') {
    openModalWindow();
  } else {
    return;
  }
});

function openModalWindow() {
  refs.modalWindowBackDrop.classList.toggle('is-open');
}

refs.modalWindowBackDrop.addEventListener('click', () => {
  refs.modalWindowBackDrop.classList.remove('is-open');
});
