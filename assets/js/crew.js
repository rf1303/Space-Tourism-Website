import { dataSpace } from "./data-change.js";

const btnDots = document.querySelectorAll('.btn__dots');

btnDots.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('btnDots')
        btnDots.forEach(e => {
            e.setAttribute('aria-selected', 'false');
        });

        btn.setAttribute('aria-selected', 'true');

        const dataName = btn.dataset.crew;
        console.log('data-crew: ', dataName, btn);

        (async () => {
            await dataCrew(dataName);
        })();
    });
});

export const dataCrew = async (dataName) => {

    const crews = await dataSpace("crew");
    // if (!crews?.[dataName]) {
    //     console.error(`Crew "${dataName}" not found`);
    //     return;
    // }
    if (!crews || !dataName || !(dataName in crews)) {
        console.warn('Invalid dataName or crews object missing');
        return;
    }
    const dataTitle = document.getElementById('data__name');
    const dataRole = document.getElementById('data__role');
    const dataImg = document.getElementById('data__img');
    const imgPng = document.getElementById('img__png');
    const imgWebp = document.getElementById('img__webp');
    const dataBio = document.getElementById('data__bio');

    
    dataTitle.textContent = crews[dataName]?.name || "Unknown Crew Member";
    dataRole.textContent = crews[dataName]?.role || "";
    dataBio.textContent = crews[dataName]?.bio || "";
    dataImg.src = crews[dataName]?.images?.webp || "../images/crew/image-victor-glover.webp";
    imgWebp.src = crews[dataName]?.images?.webp || "../images/crew/image-victor-glover.webp";
    imgPng.src = crews[dataName]?.images?.png || "../images/crew/image-victor-glover.png";

};

