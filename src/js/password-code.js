import * as basicLightbox from 'basiclightbox';

const refs = {
  verifyButton: document.querySelector('.js-verify-button'),
};
console.log(refs.verifyButton);

refs.verifyButton.addEventListener('click', e => {
  e.preventDefault();

  const markup = `
  <div class="modal-window">
    <img class="modal-check-image" src="./img/create-page/modal-check-img.png" alt="A check image" />
    <h2 class="modal-title">Password Changed Successfully</h2>
    <p class="modal-text">Your password has been updated successfully</p>
    <a class="modal-link button" href="./login-account.html">Back to Login</a>
</div>`;
  const instance = basicLightbox.create(markup);

  instance.show();
});
