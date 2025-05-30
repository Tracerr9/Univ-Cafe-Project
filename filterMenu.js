document.addEventListener('DOMContentLoaded', () => {

  const filterIcon = document.querySelector('#filterIcon img');
  filterIcon.addEventListener('click', e => {

    const filterModal = document.getElementById('filterModal');
    if (filterModal.classList.contains('active')) {
      filterModal.classList.remove('active')
    } else {
      filterModal.classList.add('active')
    }
    
  });

  const filterInput = document.querySelectorAll('#filterModal input');

  filterInput.forEach(input => {
    input.checked = true;

    input.addEventListener('change', e => {
      if (e.target.checked) {
        const value = e.target.value;
        let target = document.querySelector(`.sub-menu.${value}`);

        if (target) {
          target.classList.remove('hide');
        }
      } else {
        const value = e.target.value;
        let target =  document.querySelector(`.sub-menu.${value}`);

        if (target) {
          target.classList.add('hide');
        }
      }
    })
  })
});