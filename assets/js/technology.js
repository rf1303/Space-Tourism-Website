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
    console.log('technologys: ', technologys[dataName]);
    if (!technologys) return;

    const dataTitle = document.getElementById('data__name');
    const dataImg = document.getElementById('data__img');
    const imgPortrait = document.getElementById('img__portrait');
    const imgLandscp = document.getElementById('img__landscp');
    const dataDescrp = document.getElementById('data__description');

    if (technologys[dataName]?.images?.portrait) {
        dataImg.src = technologys[dataName].images.portrait;
        imgPortrait.srcset = technologys[dataName].images.portrait;
    } else {
        dataImg.removeAttribute('src');        // evita imagen rota
        imgPortrait.removeAttribute('srcset'); // evita carga inválida
    }
    dataTitle.textContent = technologys[dataName]?.name || "Technology Unknown dates";
    dataDescrp.textContent = technologys[dataName]?.description || "Unknown dates";
    dataImg.src = technologys[dataName]?.images.portrait || '../images/technology/image-spaceport-portrait.jpg';
    imgPortrait.srcset = technologys[dataName]?.images.portrait || "../images/technology/image-spaceport-portrait.jpg";
    imgLandscp.srcset = technologys[dataName]?.images.landscape || "../images/technology/image-spaceport-landscape.jpg";


};



