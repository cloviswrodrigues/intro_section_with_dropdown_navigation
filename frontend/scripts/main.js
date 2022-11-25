const menuDropdown = document.querySelectorAll('.js-menu-dropdown');

console.log(menuDropdown)

function openSubMenu(e) {
    hiddenAllSubMenu();

    let dropDown = e.target;
    let subMenu = e.target.nextElementSibling;

    dropDown.classList.add('dropdown-active');
    subMenu.classList.add('active');
    console.log(subMenu);
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
    console.log('foreach')
    e.addEventListener('click', openSubMenu)
})

window.addEventListener('mouseup', (e) => {
    var submenuActivate = document.querySelector('activate');
    if (e.target != submenuActivate) {
        hiddenAllSubMenu();
    }
})
