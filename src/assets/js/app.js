const header = document.querySelector('.header');
const panel = document.querySelector('.panel');
const headerArrow = document.querySelector('.header__arrowDown');
const splashLogo = document.querySelector('.splashLogo');
const content = document.querySelector('.content');
const logout = document.querySelector('.panel__logout');
const organizeShortcut = document.querySelector('.atalhos');
const shortcutButton = document.querySelector('.shortcuts');
const shortcutBackButton = document.querySelector('.atalhos__wrapper__title__back');



//slider cards
$(document).ready(function() {
    $('.cardPanel').slick({
        dots: true,
        arrows: false,
    });
    $('.footer__wrapper').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToScroll: 1,
    })
})


header.addEventListener("click", function() {
    handleToggleHeader();
})

logout.addEventListener("click", function() {
    handleLogout();
})

splashLogo.addEventListener("click", function() {
    handleLoadApp(200, 400);
})

if(document.readyState == 'loading') {
    handleLoadApp(1000, 1300);
}

function handleLoadApp(slideTime, logoTime) {
    setTimeout(() => {
        content.classList.add('content--active');
    }, slideTime)
    setTimeout(() => {
        splashLogo.classList.add('splashLogo--hidden');
    }, logoTime)
}

function handleToggleHeader() {
    panel.classList.toggle('panel--active');
    headerArrow.classList.toggle('header__arrowDown--active');
}

function handleLogout() {
    content.classList.remove('content--active');
    setTimeout(() => {
        splashLogo.classList.remove('splashLogo--hidden');
    }, 100);
    setTimeout(() => {
        handleToggleHeader();
    }, 500)
   
}

shortcutButton.addEventListener('click', function() {
    handleOpenShortcuts();
})

function handleOpenShortcuts() {
    organizeShortcut.classList.remove('atalhos--disabled');
}

shortcutBackButton.addEventListener('click', function() {
    handleCloseShortcuts()
})

function handleCloseShortcuts() {
    organizeShortcut.classList.add('atalhos--disabled');
}
