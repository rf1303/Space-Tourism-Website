import { dataSpace } from "./data-change.js";

const btnNbrs = document.querySelectorAll('.btn__nbrs');

btnNbrs.forEach(btn => {
    btn.addEventListener('click', () => {
    console.log('btnDots')
        btnNbrs.forEach(e => {
            e.setAttribute('aria-selected', 'false');
        });

        btn.setAttribute('aria-selected', 'true');

        const dataName = btn.dataset.techn;
        console.log('data-techn: ', dataName, btn);

        (async () => {
            await dataTechn(dataName);
        })();
    });
});

export const dataTechn = async (dataName) => {
    
    const technologys = await dataSpace("technology");
    console.log('technologys: ',technologys[dataName]);
    if (!technologys) return;

    const dataTitle = document.getElementById('data__name');
    const dataImg = document.getElementById('data__img');
    const imgPortrait = document.getElementById('img__portrait');
    const imgLandscp = document.getElementById('img__landscp');
    const dataDescrp = document.getElementById('data__description');

    dataTitle.textContent = technologys[dataName].name;
    dataDescrp.textContent = technologys[dataName].description;
    dataImg.src = technologys[dataName].images.portrait;
    imgPortrait.srcset = technologys[dataName].images.portrait;
    imgLandscp.srcset = technologys[dataName].images.landscape;

};

