const refs = {
  searchSection: document.querySelector('.searc-section'),
  searchList: document.querySelector('.searc-list'),
};

refs.searchSection.addEventListener('mouseenter', () => {
  document.body.style.backgroundColor = 'rgba(15, 16, 21, 0.1)';
});

refs.searchSection.addEventListener('mouseleave', () => {
  document.body.style.backgroundColor = 'transparent';
});

refs.searchList.addEventListener('click', e => {
  e.preventDefault();

  const optionsItem = e.target.closest('.options-item');

  if (optionsItem) {
    const searcitem = optionsItem.closest('.searc-item');
    const selectedText = optionsItem.querySelector('.options-text');

    searcitem.querySelector('.searc-item-text').textContent =
      selectedText.textContent;
  }
});
