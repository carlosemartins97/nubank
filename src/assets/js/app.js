const header = document.querySelector('.header');
const panel = document.querySelector('.panel');
const headerArrow = document.querySelector('.header__arrowDown');


header.addEventListener("click", function() {
    panel.classList.toggle('panel--active');
    headerArrow.classList.toggle('header__arrowDown--active');
})
