const refs = {
  forgotForm: document.querySelector('.js-forgot-form'),
  forgotInput: document.querySelector('.js-forgot-input'),
  forgotLink: document.querySelector('.js-forgot-link'),
};

refs.forgotLink.addEventListener('click', e => {
  e.preventDefault();

  const inputValue = refs.forgotForm.elements['user-email'].value.trim();
  let errorMessage = refs.forgotForm.querySelector('.forgot-message-text');

  if (inputValue !== '') {
    window.location.href = './OTP-page.html';
  } else if (!errorMessage) {
    refs.forgotInput.insertAdjacentHTML('afterend', messageTemplate());
    errorMessage = refs.forgotForm.querySelector('.forgot-message-text');

    setTimeout(() => {
      errorMessage.classList.add('visible');
    }, 0);
  }
});

function messageTemplate() {
  return `<p class="forgot-message-text">Please enter a valid email!</p>`;
}
