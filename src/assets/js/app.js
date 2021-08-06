const mobile = document.querySelector('.mobile');
const header = document.querySelector('.header');
const footer = document.querySelector('footer');

const panel = document.querySelector('.panel');
const headerArrow = document.querySelector('.header__arrowDown');
const splashLogo = document.querySelector('.splashLogo');
const content = document.querySelector('.content');
const logout = document.querySelector('.panel__logout');
const organizeShortcut = document.querySelector('.atalhos');

const shortcutBackButton = document.querySelector('.atalhos__wrapper__title__back');

const rewards = document.querySelector('.cardPanel__wrapper__rewards');
const rewardsSection = document.querySelector('.rewards');
const rewardsBack = document.querySelector('.rewards__header__back');


const account = document.querySelector('.nuaccount');
const accountSection = document.querySelector('.nuconta');
const accountBack = document.querySelector('.nuconta__header__back');
const accountShowValue = document.querySelector('.cardPanel__wrapper__mainInfo__showValue');
const accountTitle = document.querySelector('.cardPanel__wrapper__mainInfo__title--black');


const credit = document.querySelector('.cardPanel__wrapper__credit');
const creditSection = document.querySelector('.nucredito');
const creditBack = document.querySelector('.nucredito__header__back');
const creditSearch = document.querySelector('.nucredito__header__search');
const creditSearchInput = document.querySelector('.nucredito__search');
const nucreditListItems = document.querySelectorAll('.nucredito__list__item');





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

const atalhos = [
    {title: 'Indicar amigos', icon: 'invite-home'},
    {title: 'Depositar', icon: 'deposit'},
    {title: 'Transferir', icon:'transfer'},
    {title: 'Pagar', icon:'bar-code'},
    {title: 'Bloquear cartão', icon:'lock'},
    {title: 'Cartão Virtual', icon:'virtual-card'},
    {title: 'Organizar atalhos', icon:'filter'}
]
var newAtalhos = [];
atalhos.forEach(atalho => {
    renderFooterShortcutList(atalho.title, atalho.icon);
    renderShortcutList(atalho.title, atalho.icon);
})

function renderShortcutList(titulo, icone) {
    var listaDeAtalhos = document.querySelector('.atalhos__wrapper__list');
    var li = document.createElement("li");
    li.setAttribute("id", icone)
    li.setAttribute("class", "atalhos__wrapper__list__item")
    li.setAttribute("draggable", "true")
    li.setAttribute("ondragstart", "setDragging(event)")
    li.setAttribute("ondragover", "setDraggedOver(event)")
    li.setAttribute("ondrop", "setOnDrop(event)")
    li.innerHTML = titulo+"<img src='dist/img/icons/gray/filter.png' alt='filter icon'>";
    listaDeAtalhos.appendChild(li);

}

function renderFooterShortcutList(titulo, icone, isTimeToOrganize) {
    var card = document.createElement("div");
    card.setAttribute("class", `footer__wrapper__card slick-slide ${titulo === 'Organizar atalhos' ? 'shortcuts' : ''}`)
    
    var figure = document.createElement("figure");
    figure.setAttribute("class", "footer__wrapper__card__imgWrapper");

    var img = document.createElement("img");
    img.setAttribute("src", `dist/img/icons/white/${icone}.png`)
    img.setAttribute("alt", icone)
    img.setAttribute("class", "footer__wrapper__card__imgWrapper__img")

    var span = document.createElement("span");
    span.innerText = titulo;

    figure.appendChild(img);
    card.appendChild(figure);
    card.appendChild(span);

    if(isTimeToOrganize) {
        const wrapper = document.querySelector('.footer__wrapper').querySelector('.slick-track');
        wrapper.appendChild(card);
    } else {
        const wrapper = document.querySelector('.footer__wrapper');
        wrapper.appendChild(card);
    }
    
}




shortcutBackButton.addEventListener('click', function() {
    handleCloseShortcuts();
    
})

function handleCloseShortcuts() {
    content.classList.remove('content--hidden');
    organizeShortcut.classList.add('atalhos--disabled');
    content.classList.add('content--active');

    var atalhosOrganizados = [];
    const novosAtalhos = document.querySelectorAll('.atalhos__wrapper__list__item');
    novosAtalhos.forEach(item => {
        const objeto = new Object();
        objeto.title = item.innerText;
        objeto.icon = item.id;
        atalhosOrganizados.push(objeto)
    })
    const antigosAtalhos = document.querySelectorAll('.footer__wrapper__card');
    antigosAtalhos.forEach(item => {
        item.remove();
    })
    atalhosOrganizados.forEach(atalho => {
        renderFooterShortcutList(atalho.title, atalho.icon, true);
    })
    const shortcutButton = document.querySelector('.shortcuts');
    shortcutButton.addEventListener('click', function() {
        handleOpenShortcuts();
    })
}


const shortcutButton = document.querySelector('.shortcuts');
shortcutButton.addEventListener('click', function() {
    handleOpenShortcuts();
})

function handleOpenShortcuts() {
    mobile.scrollIntoView();
    organizeShortcut.classList.remove('atalhos--disabled');
    content.classList.remove('content--active');
    content.classList.add('content--hidden');
}



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
accountShowValue.addEventListener('click', function() {
    const money = document.querySelector('.nuaccount-title');
    const desc = document.querySelector('.nuaccount-description');
    
    money.classList.toggle('active');
    desc.classList.toggle('active');

    if(money.classList.contains('active')) {
        accountShowValue.src = 'dist/img/icons/gray/hide.png';
    } else {
        accountShowValue.src = 'dist/img/icons/gray/eye.png'
    }

})




credit.addEventListener('click', function() {
    creditSection.classList.remove('nucredito--disabled');
})
creditBack.addEventListener('click', function() {
    creditSection.classList.add('nucredito--disabled');
})
creditSearch.addEventListener('click', function() {
    creditSearchInput.classList.toggle('nucredito__search--active');
    creditSearchInput.focus();
})
creditSearchInput.onkeyup = function() {
    var search = creditSearchInput.value;
    for(let i = 0; i < nucreditListItems.length; i++) {
        let item = nucreditListItems[i].innerText;
        let corresponde = item.toLowerCase().indexOf(search) >= 0;
        nucreditListItems[i].style.display = corresponde ? '' : 'none';
    }
}







//organize shortcuts
function setDragging(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = '#ddd';
}
function setDraggedOver(event) {
    event.preventDefault();
    
}
function setOnDrop(event) {
    event.preventDefault();
    var dropzone = document.querySelector('.atalhos__wrapper__list');
    var refItem = event.target;

    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    dropzone.insertBefore(draggableElement, refItem);
    draggableElement.style.backgroundColor = '#eee';

    // const newShortcutObject = new Object();
    // newShortcutObject.title = draggableElement.innerText;
    // newShortcutObject.icon = id;

    // const refObject = new Object();
    // refObject.title = event.target.innerText;
    // refObject.icon = event.target.id
    
}


