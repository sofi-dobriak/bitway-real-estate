'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const propertiesSection = document.querySelector('.properties-section');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  if (propertiesSection) {
    propertiesSection.addEventListener('click', e => {
      const actionButton = e.target.closest('.js-action-button');
      const isShareButton = actionButton.querySelector('.share');

      if (actionButton) {
        actionButton.classList.toggle('active');
      }

      if (isShareButton) {
        modalBackdrop.classList.toggle('is-open');
      }
    });

    modalBackdrop.addEventListener('click', () => {
      modalBackdrop.classList.remove('is-open');
    });
  }
});
