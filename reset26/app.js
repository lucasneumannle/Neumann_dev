const buttons = document.querySelectorAll('[data-filter]');
const groups = document.querySelectorAll('[data-category]');
const list = document.querySelector('.service-groups');
const status = document.querySelector('#filter-status');
buttons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  groups.forEach(group => { group.hidden = category !== 'todos' && group.dataset.category !== category; });
  list.classList.toggle('filtered', category !== 'todos');
  const count = [...groups].filter(group => !group.hidden).reduce((sum, group) => sum + group.querySelectorAll('.service').length, 0);
  status.textContent = `${count} serviços exibidos. ${button.textContent}. A consultoria de visagismo está na seção seguinte.`;
}));
