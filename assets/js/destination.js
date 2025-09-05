
import { dataSpace } from "./data-change.js";

const textMoon = document.querySelectorAll('.text__moon');

textMoon.forEach(btn => {
    btn.addEventListener('click', () => {
        textMoon.forEach(e => {
            e.setAttribute('aria-selected', 'false');
            e.parentElement.classList.remove("active");
        });

        btn.setAttribute('aria-selected', 'true');
        const dataName = btn.dataset.destination;

        (async () => {
            await dataDestination(dataName);
        })();
    });
});

export const dataDestination = async (dataName) => {

    const destinations = await dataSpace("destinations");

    const destination = destinations.find(d => d.name.toLowerCase() === dataName.toLowerCase());
    if (!destination) {
        console.warn('Destino no encontrado', dataName);
    }

    const dataTitle = document.getElementById('data__name');
    const dataDescription = document.getElementById('data__description');
    const dataImg = document.getElementById('data__img');
    const imgPng = document.getElementById('img__png');
    const imgWebp = document.getElementById('img__webp');
    const dataDistance = document.getElementById('data__distance');
    const dataTravel = document.getElementById('data__travel');

    dataTitle.textContent = destination?.name || 'Unknown destination';
    dataDescription.textContent = destination?.description || 'No description available';
    dataDistance.textContent = destination?.distance || 'N/A';
    dataTravel.textContent = destination?.travel || 'N/A';
    dataImg.src = destination?.images?.webp || 'default-image.webp';
    imgWebp.src = destination?.images?.webp || 'default-image.webp';
    imgPng.src = destination?.images?.png || 'default-image.png';


};


