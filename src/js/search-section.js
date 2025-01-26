const refs = {
  searchSection: document.querySelector('.search-section'),
  searchList: document.querySelector('.search-list'),
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
    const searchitem = optionsItem.closest('.search-item');
    const selectedText = optionsItem.querySelector('.options-text');

    searchitem.querySelector('.search-item-text').textContent =
      selectedText.textContent;
  }
});
