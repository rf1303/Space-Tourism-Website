import './menu.js';

document.addEventListener('DOMContentLoaded', () => {

    console.log('inicio');

    const currentPage = window.location.pathname.split("/").pop();
    const menuMain = document.querySelectorAll('nav a');
    const textMoon = document.querySelectorAll('.text__moon');

    textMoon.forEach( btn => {
        btn.addEventListener('click', () => {
            textMoon.forEach(e => {
                e.setAttribute('aria-selected', 'false');
                e.parentElement.classList.remove("active");
            });

            btn.setAttribute('aria-selected', 'true');
            btn.parentElement.classList.add("active");
        });
    });


    menuMain.forEach(e => {
        const href = e.getAttribute("href").split("/").pop();
        if (href === currentPage) {
            e.setAttribute('aria-current', 'page');
            e.closest("li").classList.add('menu__bar--active');
        } else {
            console.log('No corresponde', href);
        }
    });




});
