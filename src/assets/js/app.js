const mobile = document.querySelector('.mobile');

const header = document.querySelector('.header');
const footer = document.querySelector('footer');

const panel = document.querySelector('.panel');
const headerArrow = document.querySelector('.header__arrowDown');
const splashLogo = document.querySelector('.splashLogo');
const content = document.querySelector('.content');
const logout = document.querySelector('.panel__logout');
const organizeShortcut = document.querySelector('.atalhos');
const shortcutButton = document.querySelector('.shortcuts');
const shortcutBackButton = document.querySelector('.atalhos__wrapper__title__back');

const rewards = document.querySelector('.cardPanel__wrapper__rewards');
const rewardsSection = document.querySelector('.rewards');
const rewardsBack = document.querySelector('.rewards__header__back');


const account = document.querySelector('.cardPanel__wrapper__account');
const credit = document.querySelector('.cardPanel__wrapper__credit');




//slider cards
$(document).ready(function() {
    $('.cardPanel').slick({
        dots: true,
        arrows: false,
        infinite: false,
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
    mobile.scrollIntoView();
    organizeShortcut.classList.remove('atalhos--disabled');
    content.classList.remove('content--active');
    content.classList.add('content--hidden');
}

shortcutBackButton.addEventListener('click', function() {
    handleCloseShortcuts()
})

function handleCloseShortcuts() {
    content.classList.remove('content--hidden');
    organizeShortcut.classList.add('atalhos--disabled');
    content.classList.add('content--active');
}

// function onDragStart(event) {
//     event.dataTransfer.setData("text", event.target.id);
//     event.target.style.color = 'green';
// }

// function onDragOver(event) {
//     event.preventDefault();
// }

// function onDrop(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     event.target.appendChild(document.getElementById(data));
//     document.getElementById("drag").style.color = 'black';
// }

rewards.addEventListener('click', function() {
    rewardsSection.classList.remove('rewards--disabled')
})

rewardsBack.addEventListener('click', function() {
    rewardsSection.classList.add('rewards--disabled')
})

