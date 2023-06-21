const menuOpenButton = document.querySelector('.header__nav-button--open');
const menuCloseButton = document.querySelector('.header__nav-button--close');
const menuList = document.querySelector('.header__nav-list');
const header = document.querySelector('.header__nav-wrapper');

menuOpenButton.addEventListener('click', () => {
    menuList.classList.add('header__nav-list--opened');
    header.classList.add('header__nav-wrapper--opened');
});

menuCloseButton.addEventListener('click', () => {
    menuList.classList.remove('header__nav-list--opened');
    header.classList.remove('header__nav-wrapper--opened');
});