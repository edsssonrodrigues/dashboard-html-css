const menuIcon = document.querySelector('.menu-icon');
const menuSide = document.querySelector('.sidebar');

menuIcon.addEventListener('click', (e) => {
    menuSide.classList.toggle('.hidden-menu');

    console.log(menuSide);
});