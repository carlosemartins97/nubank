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
const accountSection = document.querySelector('.nuconta');
const accountBack = document.querySelector('.nuconta__header__back');
const accountShowValue = document.querySelector('.cardPanel__wrapper__mainInfo__showValue');
const accountTitle = document.querySelector('.cardPanel__wrapper__mainInfo__title--black');


const credit = document.querySelector('.cardPanel__wrapper__credit');
const creditSection = document.querySelector('.nucredito');
const creditBack = document.querySelector('.nucredito__header__back');




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
    $('.nuconta__slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
    })

    $('.nuconta__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        const questionOrSearch = document.querySelector('.nuconta__header__questionOrSearch');
        if(nextSlide === 1) {
            questionOrSearch.src = 'dist/img/icons/gray/search.png'
            const nucontaSearch = document.querySelector('.nuconta__search');
            const nucontaListItems = document.querySelectorAll('.nuconta__slider__slide__list__item');
            questionOrSearch.addEventListener('click', function() {
                nucontaSearch.classList.add('nuconta__search--active');
                nucontaSearch.focus();
            })
            nucontaSearch.onkeyup = function() {
                var search = nucontaSearch.value;
                for(let i = 0; i < nucontaListItems.length; i++) {
                    let item = nucontaListItems[i].innerText;
                    let corresponde = item.toLowerCase().indexOf(search) >= 0;
                    nucontaListItems[i].style.display = corresponde ? '' : 'none';
                }
            }
            

        } else {
            questionOrSearch.src = 'dist/img/icons/gray/question.png'
            const nucontaSearch = document.querySelector('.nuconta__search');
            const nucontaListItems = document.querySelectorAll('.nuconta__slider__slide__list__item');

            nucontaSearch.classList.remove('nuconta__search--active');
            for(let i = 0; i < nucontaListItems.length; i++) {
                nucontaListItems[i].style.display = 'flex';
            }
        }
    });

    $('.nucredito__slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
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

account.addEventListener('click', function() {
    accountSection.classList.remove('nuconta--disabled');
})
accountBack.addEventListener('click', function() {
    accountSection.classList.add('nuconta--disabled')
})

credit.addEventListener('click', function() {
    creditSection.classList.remove('nucredito--disabled');
})

creditBack.addEventListener('click', function() {
    creditSection.classList.add('nucredito--disabled');
})

