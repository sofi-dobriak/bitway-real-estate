import * as basicLightbox from 'basiclightbox';

const refs = {
  verifyButton: document.querySelector('.js-verify-button'),
};

refs.verifyButton.addEventListener('click', e => {
  e.preventDefault();

  const markup = `
  <div class="modal-window">
<picture>
      <source srcset="http://localhost:3000/img/create-page/modal-check-img.webp 1x, http://localhost:3000/img/create-page/modal-check-img@2x.webp 2x" type="image/webp" />
      <source srcset="http://localhost:3000/img/create-page/modal-check-img.png 1x, http://localhost:3000/img/create-page/modal-check-img@2x.png 2x" type="image/png" />
      <img class="modal-check-image" src="http://localhost:3000/img/create-page/modal-check-img.png" alt="A check image" />
  </picture>
  <h2 class="modal-title">Password Changed Successfully</h2>
    <p class="modal-text">Your password has been updated successfully</p>
    <a class="modal-link button" href="./login-account.html">Back to Login</a>
</div>`;

  const instance = basicLightbox.create(markup);
  instance.show();
});
