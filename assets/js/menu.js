
const btnMenu = document.getElementById('btn__menu');
const mainNav = document.getElementById('main__nav');
const lineButton = btnMenu.querySelectorAll('.line')


btnMenu.addEventListener('click', () => {
    const lineTrfm = btnMenu.getAttribute('aria-expanded') === "true";
    btnMenu.setAttribute('aria-expanded', String(!lineTrfm));

    if (lineTrfm) {
        mainNav.classList.remove('menu__nav--open');
        lineButton[0].classList.remove('top');
        lineButton[1].classList.remove('middle');
        lineButton[2].classList.remove('bottom');
    } else {
        mainNav.classList.add('menu__nav--open');
        lineButton[0].classList.add('top');
        lineButton[1].classList.add('middle');
        lineButton[2].classList.add('bottom');
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && btnMenu.getAttribute('aria-expanded') === 'true') {
            btnMenu.click();
        }
    });


});
