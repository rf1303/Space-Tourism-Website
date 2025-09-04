
import { dataSpace } from "./data-change.js";

const textMoon = document.querySelectorAll('.text__moon');

textMoon.forEach(btn => {
    btn.addEventListener('click', () => {
        textMoon.forEach(e => {
            e.setAttribute('aria-selected', 'false');
            e.parentElement.classList.remove("active");
        });

        btn.setAttribute('aria-selected', 'true');
        btn.parentElement.classList.add("active");

        const dataName = btn.dataset.destination;

        (async () => {
            await dataDestination(dataName);
        })();
    });
});

export const dataDestination = async (dataName) => {

    const destinations = await dataSpace("destinations");
    if (!dataDestination) return;

    const destination = destinations.find(d => d.name.toLowerCase() === dataName.toLowerCase());
    console.log('Name dataJson:', destination);
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

    dataTitle.textContent = destination.name;
    dataDescription.textContent = destination.description;
    dataDistance.textContent = destination.distance;
    dataTravel.textContent = destination.travel;
    dataImg.src = destination.images.webp;
    imgWebp.src = destination.images.webp;
    imgPng.src = destination.images.png;

};


