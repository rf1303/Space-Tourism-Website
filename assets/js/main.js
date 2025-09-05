import './menu.js';
import './data-change.js';
import './destination.js';
import './crew.js';
import './technology.js';

document.addEventListener('DOMContentLoaded', () => {

    console.log('inicio');

    const currentPage = window.location.pathname.split("/").pop();
    const menuMain = document.querySelectorAll('nav a');

    menuMain.forEach(e => {
        const href = e.getAttribute("href").split("/").pop();
        if (href === currentPage) {
            e.setAttribute('aria-current', 'page');

            console.log('No corresponde', href);
        }
    });

});
