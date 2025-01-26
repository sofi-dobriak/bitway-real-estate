const refs = {
  verifyButton: document.querySelector('.js-verify-button'),
  modalWindowBackDrop: document.querySelector('.modal-backdrop'),
  inputsContainer: document.querySelector('.code-input-container'),
  firstInput: document.querySelector('.input-code'),
};

document.addEventListener('DOMContentLoaded', () => {
  refs.firstInput.focus();
});

refs.inputsContainer.addEventListener('input', e => {
  if (e.target.classList.contains('input-code')) {
    const inputs = Array.from(document.querySelectorAll('.input-code'));
    const index = inputs.indexOf(e.target);

    if (e.target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  }
});

refs.verifyButton.addEventListener('click', e => {
  e.preventDefault();

  const inputs = Array.from(document.querySelectorAll('.input-code'));
  const allFilled = inputs.every(input => input.value.length === 1);

  let errorMessage = refs.inputsContainer.querySelector('.forgot-message-text');

  if (allFilled) {
    refs.modalWindowBackDrop.classList.add('is-open');
  } else {
    if (!errorMessage) {
      refs.inputsContainer.insertAdjacentHTML('afterend', messageTemplate());
      errorMessage = refs.inputsContainer.nextElementSibling;
      errorMessage.style.marginBottom = '14px';

      setTimeout(() => {
        errorMessage.classList.add('visible');
      }, 0);
    }
  }
});

refs.modalWindowBackDrop.addEventListener('click', () => {
  refs.modalWindowBackDrop.classList.remove('is-open');
});

function messageTemplate() {
  return `<p class="forgot-message-text">Please fill in all the inputs!</p>`;
}
