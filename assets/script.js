const tombolMenu = document.querySelector('.hamburger input');
const nav = document.querySelector('nav ul');

tombolMenu.addEventListener('click', function() {
    nav.classList.toggle('ganti');
});