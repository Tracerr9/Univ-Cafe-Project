document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const nav = document.querySelector('.navigations');
    const navbar = document.querySelector('.navbar');

    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    } else {
      nav.classList.add('active');
    }
  }); 
})