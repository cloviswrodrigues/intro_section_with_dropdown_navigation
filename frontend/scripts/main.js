const menuDropdown = document.querySelectorAll('.js-menu-dropdown');
const iconMenu = document.querySelector('.js-icon-menu');
const iconClose = document.querySelector('.js-icon-close');
const btnMenuMobile = document.querySelector('.js-btn-mobile');
const menuMobile = document.querySelector('.js-menu-mobile');
const body = document.querySelector('body')



function openSubMenu(e) {
    hiddenAllSubMenu();

    let dropDown = e.target;
    let subMenu = e.target.nextElementSibling;

    dropDown.classList.add('dropdown-active');
    subMenu.classList.add('active');
}

function hiddenAllSubMenu(){
    menuDropdown.forEach((e) => {
        let dropDown = e;
        let subMenu = e.nextElementSibling;

        dropDown.classList.remove('dropdown-active');
        subMenu.classList.remove('active');
    })
}

menuDropdown.forEach((e) => {
    e.addEventListener('click', openSubMenu)
})

window.addEventListener('mouseup', (e) => {
    var submenuActivate = document.querySelector('activate');
    if (e.target != submenuActivate) {
        hiddenAllSubMenu();
    }
})

function toggleMenuMobile(e) {
    iconMenu.classList.toggle('active');
    iconClose.classList.toggle('active');
    body.classList.toggle('darken');
    menuMobile.classList.toggle('active-menu');
}

btnMenuMobile.addEventListener('click', toggleMenuMobile)